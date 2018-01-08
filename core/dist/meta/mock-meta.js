"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var mock_user_1 = require("../user/mock-user");
var faker = require('faker');
function metaMock(_a) {
    var _b = _a.locale, locale = _b === void 0 ? 'en' : _b, _c = _a.roles, roles = _c === void 0 ? ['user'] : _c;
    if (locale) {
        faker.locale = locale;
    }
    return {
        created_: function () { return moment(faker.date.past()).toISOString(); },
        createdBy_: function () { return mock_user_1.default({ roles: roles }); },
        updated_: function () { return moment(faker.date.recent()).toISOString(); },
        updatedBy_: function () { return mock_user_1.default({ roles: roles }); }
    };
}
exports.default = metaMock;
;
//# sourceMappingURL=mock-meta.js.map