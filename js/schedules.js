'use strict';


let ScheduleList = [];
let Timetable = [];

function ScheduleInfo() {
    this.id = null;
    this.calendarId = null;

    this.title = null;
    this.body = null;
    this.location = null;
    this.isAllday = false;
    this.start = null;
    this.end = null;
    this.category = '';
    this.dueDateClass = '';

    this.color = null;
    this.bgColor = null;
    this.dragBgColor = null;
    this.borderColor = null;
    this.customStyle = '';

    this.isFocused = false;
    this.isPending = false;
    this.isVisible = true;
    this.isReadOnly = false;
    this.isPrivate = false;
    this.goingDuration = 0;
    this.comingDuration = 0;
    this.recurrenceRule = '';
    this.state = '';

    this.raw = {
        memo: '',
        hasToOrCc: false,
        hasRecurrenceRule: false,
        location: null,
        creator: {
            name: '',
            avatar: '',
            company: '',
            email: '',
            phone: ''
        }
    };
}

function generateScheduleForTimetable(timetable, calendar) {
    const schedule = new ScheduleInfo();
    schedule.id = chance.guid();
    schedule.calendarId = calendar.id;

    schedule.title = timetable.name;
    schedule.body = `<h6 class="mdl-typography--font-thin">${timetable.name}</h6>`;
    schedule.isReadOnly = true;
    //03.06.2022
    const start = moment(`${timetable.date} ${timetable.start}:00`, 'DD.MM.YYYY h:m:s').toDate();
    const end = moment(`${timetable.date} ${timetable.end}:00`, 'DD.MM.YYYY h:m:s').toDate();

    schedule.start = start;
    schedule.end = end
    schedule.isAllday = false
    schedule.isPrivate = false;
    schedule.isReadOnly = true;

    schedule.attendees = ["Isakov Sergey"];
    //schedule.recurrenceRule = chance.bool({likelihood: 20}) ? 'repeated events' : '';
    schedule.state = 'free';
    schedule.color = calendar.color;
    schedule.bgColor = calendar.bgColor;
    schedule.dragBgColor = calendar.dragBgColor;
    schedule.borderColor = calendar.borderColor;
    schedule.category = 'time';

    schedule.raw.memo = chance.sentence();
    schedule.raw.creator.name = chance.name();
    schedule.raw.creator.avatar = chance.avatar();
    schedule.raw.creator.company = chance.company();
    schedule.raw.creator.email = chance.email();
    schedule.raw.creator.phone = chance.phone();

    ScheduleList.push(schedule);
}

function generateSchedule(viewName, renderStart, renderEnd) {
    ScheduleList = [];
    Timetable = []

    CalendarList.forEach(function (calendar) {
        let i = 0, length = 10;
        if (viewName === 'month') {
            length = 3;
        } else if (viewName === 'day') {
            length = 4;
        }
        for (; i < length; i += 1) {
            //generateRandomSchedule(calendar, renderStart, renderEnd);
        }
    });
}
