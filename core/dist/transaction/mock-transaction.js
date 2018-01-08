"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var moment = require("moment");
var faker = require('faker');
function transactionMock(_a) {
    var cardVendor = _a.cardVendor, locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        account_: function () { return faker.finance.account(); },
        amount_: function () { return faker.finance.amount(); },
        company_: function () { return faker.company.companyName(); },
        currencyCode_: function () { return faker.finance.currencyCode(); },
        currencyName_: function () { return faker.finance.currencyName(); },
        currencySymbol_: function () { return faker.finance.currencySymbol(); },
        date_: function () { return moment(faker.date.past()).toISOString(); },
        id_: function () { return casual.uuid; },
        name_: function () { return faker.finance.accountName(); },
        type_: function () { return faker.finance.transactionType(); }
    };
}
exports.default = transactionMock;
;
//# sourceMappingURL=mock-transaction.js.map