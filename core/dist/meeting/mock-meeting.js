"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var helpers_1 = require("../helpers");
var mock_user_1 = require("../user/mock-user");
var mock_address_1 = require("../address/mock-address");
var faker = require('faker');
function meetingMock(_a) {
    var _b = _a.locale, locale = _b === void 0 ? 'en' : _b, _c = _a.roles, roles = _c === void 0 ? ['user'] : _c;
    if (locale) {
        faker.locale = locale;
    }
    return {
        allDay_: function () { return faker.random.boolean(); },
        address_: function () { return mock_address_1.default({ locale: locale }); },
        invited_: function () {
            return [
                mock_user_1.default({ locale: locale, roles: roles }),
                mock_user_1.default({ locale: locale, roles: roles }),
                mock_user_1.default({ locale: locale, roles: roles })
            ];
        },
        description_: function () { return faker.lorem.sentence(); },
        end_: function () { return helpers_1.getDates().endDate; },
        start_: function () { return helpers_1.getDates().startDate; },
        title_: function () { return casual.title; }
    };
}
exports.default = meetingMock;
;
//# sourceMappingURL=mock-meeting.js.map