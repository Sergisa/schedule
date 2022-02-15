calendarApp.component('calendarList', {
    templateUrl: 'js/calendarList/calendarListView.template.html',
    controller: function CalendarListController($scope, $element, $attrs) {
        this.calendars = CalendarList
    }
});

