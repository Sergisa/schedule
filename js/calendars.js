'use strict';

const CalendarList = [];

function CalendarInfo() {
    this.id = null;
    this.name = null;
    this.checked = true;
    this.color = null;
    this.bgColor = null;
    this.borderColor = null;
    this.dragBgColor = null;
}

function addCalendar(calendar) {
    CalendarList.push(calendar);
}

function findCalendar(id) {
    let found;

    CalendarList.forEach(function (calendar) {
        if (calendar.id === id) {
            found = calendar;
        }
    });

    return found || CalendarList[0];
}

function hexToRGBA(hex) {
    const radix = 16;
    const r = parseInt(hex.slice(1, 3), radix),
        g = parseInt(hex.slice(3, 5), radix),
        b = parseInt(hex.slice(5, 7), radix),
        a = parseInt(hex.slice(7, 9), radix) / 255 || 1;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

(function () {
    let calendar;
    //9e5fff
    calendar = new CalendarInfo();
    calendar.id = String(1);
    calendar.name = 'Лекции';
    calendar.color = '#ffffff';
    calendar.bgColor = Material.colors.purple["300"].hex;
    calendar.dragBgColor = '#ba68c8';
    calendar.borderColor = '#ba68c8';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    calendar.id = String(2);
    calendar.name = 'Семинары';
    calendar.color = '#ffffff';
    calendar.bgColor = '#03a9f4';
    calendar.dragBgColor = '#03a9f4';
    calendar.borderColor = '#03a9f4';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    calendar.id = String(3);
    calendar.name = 'Пары';
    calendar.color = '#ffffff';
    calendar.bgColor = '#f06292';
    calendar.dragBgColor = '#f06292';
    calendar.borderColor = '#f06292';

    addCalendar(calendar);
    /*
    calendar = new CalendarInfo();
    id = 3;
    calendar.id = String(id);
    calendar.name = 'Пары';
    calendar.color = '#ffffff';
    calendar.bgColor = '#ff5583';
    calendar.dragBgColor = '#ff5583';
    calendar.borderColor = '#ff5583';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Friend';
    calendar.color = '#ffffff';
    calendar.bgColor = '#03bd9e';
    calendar.dragBgColor = '#03bd9e';
    calendar.borderColor = '#03bd9e';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Travel';
    calendar.color = '#ffffff';
    calendar.bgColor = '#bbdc00';
    calendar.dragBgColor = '#bbdc00';
    calendar.borderColor = '#bbdc00';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'etc';
    calendar.color = '#ffffff';
    calendar.bgColor = '#9d9d9d';
    calendar.dragBgColor = '#9d9d9d';
    calendar.borderColor = '#9d9d9d';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Birthdays';
    calendar.color = '#ffffff';
    calendar.bgColor = '#ffbb3b';
    calendar.dragBgColor = '#ffbb3b';
    calendar.borderColor = '#ffbb3b';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'National Holidays';
    calendar.color = '#ffffff';
    calendar.bgColor = '#ff4040';
    calendar.dragBgColor = '#ff4040';
    calendar.borderColor = '#ff4040';
    addCalendar(calendar);*/
})();
