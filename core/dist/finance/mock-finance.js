"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function financeMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        account_: function () { return faker.finance.account(); },
        accountName_: function () { return faker.finance.accountName(); },
        mask_: function () { return faker.finance.mask(); },
        amount_: function () { return faker.finance.amount(); },
        transactionType_: function () { return faker.finance.transactionType(); },
        bitcoinAddress_: function () { return faker.finance.bitcoinAddress(); },
        iban_: function () { return faker.finance.iban(); },
        bic_: function () { return faker.finance.bic(); }
    };
}
exports.default = financeMock;
//# sourceMappingURL=mock-finance.js.map