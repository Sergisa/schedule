'use strict';

(function (window, Calendar) {
    let cal, resizeThrottled;
    const useCreationPopup = false;
    const useDetailPopup = true;
    let datePicker, selectedCalendar;

    cal = new Calendar('#calendar', {
        //theme: THEME_DOORAY,
        defaultView: 'week',
        useCreationPopup: useCreationPopup,
        useDetailPopup: useDetailPopup,
        calendars: CalendarList,
        taskView: false,
        disableClick: useCreationPopup,
        isReadOnly: true,
        scheduleView: ['time'],
        week: {
            startDayOfWeek: true,
            narrowWeekend: true
        },
        template: {
            milestone: function (model) {
                return '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + model.bgColor + '">' + model.title + '</span>';
            },
            allday: function (schedule) {
                return getTimeTemplate(schedule, true);
            },
            time: function (schedule) {
                return getTimeTemplate(schedule, false);
            }
        }
    });

    cal.on({
        'clickMore': function (e) {
            console.log('clickMore', e);
        },
        'clickSchedule': function (e) {
            console.log('clickSchedule', e);
        },
        'clickDayname': function (date) {
            console.log('clickDayname', date);
        },
        'beforeCreateSchedule': function (e) {
            console.log('beforeCreateSchedule', e);
            saveNewSchedule(e);
        },
        'beforeUpdateSchedule': function (e) {
            const schedule = e.schedule;
            const changes = e.changes;

            console.log('beforeUpdateSchedule', e);

            if (changes && !changes.isAllDay && schedule.category === 'allday') {
                changes.category = 'time';
            }

            cal.updateSchedule(schedule.id, schedule.calendarId, changes);
            refreshScheduleVisibility();
        },
        'beforeDeleteSchedule': function (e) {
            console.log('beforeDeleteSchedule', e);
            cal.deleteSchedule(e.schedule.id, e.schedule.calendarId);
        },
        'afterRenderSchedule': function (e) {
            const schedule = e.schedule;
            // var element = cal.getElement(schedule.id, schedule.calendarId);
            // console.log('afterRenderSchedule', element);
        },
        'clickTimezonesCollapseBtn': function (timezonesCollapsed) {
            console.log('timezonesCollapsed', timezonesCollapsed);

            if (timezonesCollapsed) {
                cal.setTheme({
                    'week.daygridLeft.width': '77px',
                    'week.timegridLeft.width': '77px'
                });
            } else {
                cal.setTheme({
                    'week.daygridLeft.width': '60px',
                    'week.timegridLeft.width': '60px'
                });
            }

            return true;
        }
    });

    function getTimeTemplate(schedule, isAllDay) {
        const html = [];
        const start = moment(schedule.start.toUTCString());
        if (!isAllDay) {
            html.push('<strong>' + start.format('HH:mm') + '</strong> ');
        }
        if (schedule.isPrivate) {
            html.push('<span class="calendar-font-icon ic-lock-b"></span>');
            html.push(' Private');
        } else {
            if (schedule.isReadOnly) {
                //html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
            } else if (schedule.recurrenceRule) {
                html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
            } else if (schedule.attendees.length) {
                html.push('<span class="calendar-font-icon ic-user-b"></span>');
            } else if (schedule.location) {
                html.push('<span class="calendar-font-icon ic-location-b"></span>');
            }
            html.push(' ' + schedule.title);
        }

        return html.join('');
    }

    function onClickMenu(e) {
        const target = $(e.target).closest('a[role="menuitem"]')[0];
        const action = getDataAction(target);
        const options = cal.getOptions();
        let viewName = '';

        console.log(target);
        console.log(action);
        switch (action) {
            case 'toggle-daily':
                viewName = 'day';
                break;
            case 'toggle-weekly':
                viewName = 'week';
                break;
            case 'toggle-monthly':
                options.month.visibleWeeksCount = 0;
                viewName = 'month';
                break;
            case 'toggle-weeks2':
                options.month.visibleWeeksCount = 2;
                viewName = 'month';
                break;
            case 'toggle-weeks3':
                options.month.visibleWeeksCount = 3;
                viewName = 'month';
                break;
            case 'toggle-narrow-weekend':
                options.month.narrowWeekend = !options.month.narrowWeekend;
                options.week.narrowWeekend = !options.week.narrowWeekend;
                viewName = cal.getViewName();

                target.querySelector('input').checked = options.month.narrowWeekend;
                break;
            case 'toggle-start-day-1':
                options.month.startDayOfWeek = options.month.startDayOfWeek ? 0 : 1;
                options.week.startDayOfWeek = options.week.startDayOfWeek ? 0 : 1;
                viewName = cal.getViewName();

                target.querySelector('input').checked = options.month.startDayOfWeek;
                break;
            case 'toggle-workweek':
                options.month.workweek = !options.month.workweek;
                options.week.workweek = !options.week.workweek;
                viewName = cal.getViewName();

                target.querySelector('input').checked = !options.month.workweek;
                break;
            default:
                break;
        }

        cal.setOptions(options, true);
        cal.changeView(viewName, true);

        //setDropdownCalendarType();
        //setRenderRangeText();
        setSchedules();
    }


    function onNewSchedule() {
        const title = $('#new-schedule-title').val();
        const location = $('#new-schedule-location').val();
        const isAllDay = document.getElementById('new-schedule-allday').checked;
        const start = datePicker.getStartDate();
        const end = datePicker.getEndDate();
        const calendar = selectedCalendar ? selectedCalendar : CalendarList[0];

        if (!title) {
            return;
        }

        cal.createSchedules([{
            id: String(chance.guid()),
            calendarId: calendar.id,
            title: title,
            isAllDay: isAllDay,
            location: location,
            start: start,
            end: end,
            category: isAllDay ? 'allday' : 'time',
            dueDateClass: '',
            color: calendar.color,
            bgColor: calendar.bgColor,
            dragBgColor: calendar.bgColor,
            borderColor: calendar.borderColor,
            state: 'Busy'
        }]);

        $('#modal-new-schedule').modal('hide');
    }

    function onChangeNewScheduleCalendar(e) {
        const target = $(e.target).closest('a[role="menuitem"]')[0];
        const calendarId = getDataAction(target);
        changeNewScheduleCalendar(calendarId);
    }

    function changeNewScheduleCalendar(calendarId) {
        const calendarNameElement = document.getElementById('calendarName');
        const calendar = findCalendar(calendarId);
        const html = [];

        html.push('<span class="calendar-bar" style="background-color: ' + calendar.bgColor + '; border-color:' + calendar.borderColor + ';"></span>');
        html.push('<span class="calendar-name">' + calendar.name + '</span>');

        calendarNameElement.innerHTML = html.join('');

        selectedCalendar = calendar;
    }

    function createNewSchedule(event) {
        const start = event.start ? new Date(event.start.getTime()) : new Date();
        const end = event.end ? new Date(event.end.getTime()) : moment().add(1, 'hours').toDate();

        if (useCreationPopup) {
            cal.openCreationPopup({
                start: start,
                end: end
            });
        }
    }

    function saveNewSchedule(scheduleData) {
        const calendar = scheduleData.calendar || findCalendar(scheduleData.calendarId);
        const schedule = {
            id: String(chance.guid()),
            title: scheduleData.title,
            isAllDay: scheduleData.isAllDay,
            start: scheduleData.start,
            end: scheduleData.end,
            category: scheduleData.isAllDay ? 'allday' : 'time',
            dueDateClass: '',
            color: calendar.color,
            bgColor: calendar.bgColor,
            dragBgColor: calendar.bgColor,
            borderColor: calendar.borderColor,
            location: scheduleData.location,
            isPrivate: scheduleData.isPrivate,
            state: scheduleData.state
        };
        if (calendar) {
            schedule.calendarId = calendar.id;
            schedule.color = calendar.color;
            schedule.bgColor = calendar.bgColor;
            schedule.borderColor = calendar.borderColor;
        }

        cal.createSchedules([schedule]);

        refreshScheduleVisibility();
    }

    function onChangeCalendars(e) {
        const calendarId = e.target.value;
        const checked = e.target.checked;
        const viewAll = document.querySelector('.lnb-calendars-item input');
        const calendarElements = Array.prototype.slice.call(document.querySelectorAll('#calendarList input'));
        let allCheckedCalendars = true;

        if (calendarId === 'all') {
            allCheckedCalendars = checked;

            calendarElements.forEach(function (input) {
                const span = input.parentNode;
                input.checked = checked;
                span.style.backgroundColor = checked ? span.style.borderColor : 'transparent';
            });

            CalendarList.forEach(function (calendar) {
                calendar.checked = checked;
            });
        } else {
            findCalendar(calendarId).checked = checked;

            allCheckedCalendars = calendarElements.every(function (input) {
                return input.checked;
            });

            viewAll.checked = allCheckedCalendars;
        }

        refreshScheduleVisibility();
    }

    function refreshScheduleVisibility() {
        const calendarElements = Array.prototype.slice.call(document.querySelectorAll('#calendarList input'));

        CalendarList.forEach(function (calendar) {
            cal.toggleSchedules(calendar.id, !calendar.checked, false);
        });

        cal.render(true);

        calendarElements.forEach(function (input) {
            const span = input.nextElementSibling;
            span.style.backgroundColor = input.checked ? span.style.borderColor : 'transparent';
        });
    }

    /*function onClickNavi(e) {
        const action = getDataAction(e.target);

        switch (action) {
            case 'move-prev':
                cal.prev();
                break;
            case 'move-next':
                cal.next();
                break;
            case 'move-today':
                cal.today();
                break;
            default:
                return;
        }

        setRenderRangeText();
        setSchedules();
    }*/

    /*function setDropdownCalendarType() {
        const calendarTypeName = document.getElementById('calendarTypeName');
        const calendarTypeIcon = document.getElementById('calendarTypeIcon');
        const options = cal.getOptions();
        let type = cal.getViewName();
        let iconClassName;

        if (type === 'day') {
            type = 'Daily';
            iconClassName = '';
        } else if (type === 'week') {
            type = 'Weekly';
            iconClassName = '';
        } else if (options.month.visibleWeeksCount === 2) {
            type = '2 weeks';
            iconClassName = '';
        } else if (options.month.visibleWeeksCount === 3) {
            type = '3 weeks';
            iconClassName = '';
        } else {
            type = 'Monthly';
            iconClassName = 'ic_view_month';
        }

        calendarTypeName.innerHTML = type;
        calendarTypeIcon.className = 'material-icons ' + iconClassName;
    }*/

    /*function setRenderRangeText() {
       const renderRange = document.getElementById('renderRange');
       const options = cal.getOptions();
       const viewName = cal.getViewName();

       const html = [];
       if (viewName === 'day') {
           html.push(currentCalendarDate('YYYY.MM.DD'));
       } else if (viewName === 'month' &&
           (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
           html.push(currentCalendarDate('YYYY.MM'));
       } else {
           html.push(moment(cal.getDateRangeStart().getTime()).format('YYYY.MM.DD'));
           html.push(' ~ ');
           html.push(moment(cal.getDateRangeEnd().getTime()).format(' MM.DD'));
       }
       renderRange.innerHTML = html.join('');
   }*/

    function currentCalendarDate(format) {
        const currentDate = moment([cal.getDate().getFullYear(), cal.getDate().getMonth(), cal.getDate().getDate()]);

        return currentDate.format(format);
    }

    function setSchedules() {
        cal.clear();
        //generateSchedule(cal.getViewName(), cal.getDateRangeStart(), cal.getDateRangeEnd());
        $.getJSON('schedule.json').done(function (data) {
            ScheduleList = []
            for (let date in data) {
                const day = data[date];
                day.forEach(function (discipline) {
                    discipline.date = date;
                    const currentCalendar = CalendarList.filter((calendar) => {
                        return calendar.id === discipline.type;
                    })[0]
                    generateScheduleForTimetable(discipline, CalendarList.filter((calendar) => {
                        return calendar.id == discipline.type;
                    })[0]);
                });
            }
            cal.createSchedules(ScheduleList);
        })

        refreshScheduleVisibility();
    }

    function setEventListener() {
        //$('#menu-navi').on('click', onClickNavi);
        $('.dropdown-menu a[role="menuitem"]').on('click', onClickMenu);
        $('#lnb-calendars').on('change', onChangeCalendars);

        $('#btn-save-schedule').on('click', onNewSchedule);
        $('#btn-new-schedule').on('click', createNewSchedule);

        $('#dropdownMenu-calendars-list').on('click', onChangeNewScheduleCalendar);


        window.addEventListener('resize', resizeThrottled);
    }

    function getDataAction(target) {
        return target.dataset ? target.dataset.action : target.getAttribute('data-action');
    }

    resizeThrottled = tui.util.throttle(function () {
        cal.render();
    }, 50);

    window.cal = cal;

    //setDropdownCalendarType();
    //setRenderRangeText();
    setSchedules();
    setEventListener();
})(window, tui.Calendar);

// set calendars
(function () {
    const calendarList = document.getElementById('calendarList');
    const html = [];
    /*CalendarList.forEach(function (calendar) {
        html.push(`<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="${calendar.id}">
            <input type="checkbox" id="${calendar.id}" value="${calendar.id}" class="mdl-checkbox__input" checked>
            <span class="mdl-checkbox__label">${calendar.name}</span>
        </label>`
        );

        html.push(`<div class="lnb-calendars-item"><label>
            <input type="checkbox" class="tui-full-calendar-checkbox-round" value="${calendar.id}" checked>
            <span style="border-color:${calendar.borderColor}; background-color:${calendar.borderColor};"></span>
            <span>${calendar.name}</span>
            </label></div>`
        );
    });
    calendarList.innerHTML = html.join('\n');*/
})();
