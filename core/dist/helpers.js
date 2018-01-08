"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
function randomNumber(min, max, interval) {
    if (typeof interval === 'undefined') {
        interval = 1;
    }
    var r = Math.floor(Math.random() * (max - min + interval) / interval);
    return r * interval + min;
}
exports.randomNumber = randomNumber;
function getDates() {
    var date = new Date();
    var startDate = moment({
        years: date.getFullYear(),
        months: date.getMonth(),
        date: randomNumber(1, 28),
        hours: randomNumber(0, 23),
        minutes: randomNumber(1, 59)
    });
    var endDate = moment({
        years: startDate.year(),
        months: startDate.month(),
        date: randomNumber(1, 28),
        hours: randomNumber(0, 23),
        minutes: randomNumber(1, 59)
    });
    return {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
    };
}
exports.getDates = getDates;
//# sourceMappingURL=helpers.js.map