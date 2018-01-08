"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function phoneMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        phoneFormats_: function () { return faker.phone.phoneFormats(); },
        phoneNumberFormat_: function () { return faker.phone.phoneNumberFormat(); },
        phoneNumber_: function () { return faker.phone.phoneNumber(); }
    };
}
exports.default = phoneMock;
//# sourceMappingURL=mock-phone.js.map