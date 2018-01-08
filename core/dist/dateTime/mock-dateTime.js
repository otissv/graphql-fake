"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var moment = require("moment");
var helpers_1 = require("../helpers");
var faker = require('faker');
function dateTimeMock(_a) {
    var _b = _a.dataFormat, dataFormat = _b === void 0 ? 'YYYY-MM-DD' : _b, locale = _a.locale, _c = _a.timeFormat, timeFormat = _c === void 0 ? 'HH_:mm_:ss' : _c;
    if (locale) {
        faker.locale = locale;
    }
    return {
        allDay_: function () { return faker.random.boolean(); },
        amPm_: function () { return casual.am_pm; },
        between_: function () { return moment(faker.date.between()).toISOString(); },
        century_: function () { return casual.century; },
        date_: function () { return casual.date(dataFormat); },
        dayOfMonth_: function () { return casual.day_of_month; },
        dayOfWeek_: function () { return casual.day_of_week; },
        dayOfYear_: function () { return casual.day_of_year; },
        endDate_: function () { return helpers_1.getDates().endDate; },
        future_: function () { return moment(faker.date.future()).toISOString(); },
        monthNumber_: function () { return casual.month_number; },
        month_: function () { return faker.date.month(); },
        past_: function () { return moment(faker.date.past()).toISOString(); },
        recent_: function () { return moment(faker.date.recent()).toISOString(); },
        startDAte_: function () { return helpers_1.getDates().startDate; },
        time_: function () { return casual.time(timeFormat); },
        timezone_: function () { return casual.timezone; },
        unixTime_: function () { return casual.unix_time; },
        weekday_: function () { return faker.date.weekday(); },
        year_: function () { return casual.year; },
    };
}
exports.default = dateTimeMock;
//# sourceMappingURL=mock-dateTime.js.map