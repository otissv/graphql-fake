"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var moment = require("moment");
var faker = require('faker');
function messageMock(_a) {
    var _b = _a.locale, locale = _b === void 0 ? 'en' : _b;
    if (locale) {
        faker.locale = locale;
    }
    return {
        from_: function () { return faker.internet.email(); },
        to_: function () { return [faker.internet.email()]; },
        date_: function () { return moment(faker.date.past()).toISOString(); },
        cc_: function () { return [faker.internet.email()]; },
        body_: function () { return faker.lorem.paragraphs(); },
        subject_: function () { return casual.title; }
    };
}
exports.default = messageMock;
;
//# sourceMappingURL=mock-message.js.map