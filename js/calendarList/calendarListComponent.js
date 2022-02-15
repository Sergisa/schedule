calendarApp.component('calendarList', {
    templateUrl: 'js/calendarList/calendarListView.html',
    controller: function CalendarListController($scope, $element, $attrs) {
        this.calendars = CalendarList
    }
});

