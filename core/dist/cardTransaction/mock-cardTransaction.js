"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var faker = require('faker');
function cardTransactionMock(_a) {
    var cardVendor = _a.cardVendor, _b = _a.locale, locale = _b === void 0 ? 'en' : _b;
    if (locale) {
        faker.locale = locale;
    }
    return __assign({ currencyCode_: function () { return faker.finance.currencyCode(); }, currencySymbol_: function () { return faker.finance.currencySymbol(); }, currencyName_: function () { return faker.finance.currencyName(); }, cardType_: function () { return casual.card_type; }, cardNumber_: function () { return casual.card_number(cardVendor); }, cardExp_: function () { return casual.card_exp; }, cardData_: function () { return casual.card_data; } }, faker.helpers.createCard().accountHistory[0]);
}
exports.default = cardTransactionMock;
;
//# sourceMappingURL=mock-cardTransaction.js.map