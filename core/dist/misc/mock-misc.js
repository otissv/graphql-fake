"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var faker = require('faker');
function miscMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        languageCode_: function () { return casual.language_code; },
        locale_: function () { return faker.random.locale(); },
        boolean_: function () { return faker.random.boolean(); },
        alphaNumeric_: function () { return faker.random.alphaNumeric(); },
        randomize_: function () { return faker.helpers.randomize(); }
    };
}
exports.default = miscMock;
//# sourceMappingURL=mock-misc.js.map