"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function currencyMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        currencyCode_: function () { return faker.finance.currencyCode(); },
        currencySymbol_: function () { return faker.finance.currencySymbol(); },
        currencyName_: function () { return faker.finance.currencyName(); },
    };
}
exports.default = currencyMock;
//# sourceMappingURL=mock-currency.js.map