const rightPanel = {
    block: document.getElementById("rightPanel"),
    toggle: function () {
        this.block.classList.toggle('show')
    }
}

function setDropdownCalendarType(type, options) {
    const calendarTypeName = document.getElementById('calendarTypeName');
    const calendarTypeIcon = document.getElementById('calendarTypeIcon');
    //let type = cal.getViewName();
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
}

calendarApp.component('topNavigation', {
    templateUrl: 'js/topNavigation/topNavigationView.html',
    controller: function CalendarListController($scope, $element, $attrs) {
        let type = cal.getViewName();
        const options = cal.getOptions();

        this.setCurrentDate = function () {
            //const renderRange = document.getElementById('renderRange');
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
            $scope.date = html.join('');
            //renderRange.innerHTML = html.join('');
        }
        this.previousPeriod = function () {
            cal.prev();
            this.setCurrentDate()
        };
        this.nextPeriod = function () {
            cal.next();
            this.setCurrentDate()
        };
        this.setCurrentDateRange = function () {
            cal.today();
            this.setCurrentDate();
        };

        this.$onInit = function () {
            this.setCurrentDate()
            setDropdownCalendarType(type, options);

            this.dropdownElements = [{
                type: 'daily',
                icon:'calendar_view_day',
                selected:false
            },{
                type: 'week',
                icon:'calendar_view_week',
                selected:false
            },{
                type: 'Monthly',
                icon:'calendar_view_month',
                selected:false
            },{
                type: '2 weeks',
                icon:'horizontal_distribute',
                selected:false
            },{
                type: '3 weeks',
                icon:'horizontal_distribute',
                selected:false
            }]


        }
        this.showRightPanel = function ($ev) {
            rightPanel.toggle();
        }
        this.changeVisibleRange = function(source){
            console.log("changeVisibleRange", source)
        }
    }
});
