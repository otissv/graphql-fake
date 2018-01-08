"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function businessMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        bsAdjective_: function () { return faker.company.bsAdjective(); },
        bsBuzz_: function () { return faker.company.bsBuzz(); },
        bsNoun_: function () { return faker.company.bsNoun(); },
        bs_: function () { return faker.company.bs(); },
        catchPhraseAdjective_: function () { return faker.company.catchPhraseAdjective(); },
        catchPhraseDescriptor_: function () { return faker.company.catchPhraseDescriptor(); },
        catchPhraseNoun_: function () { return faker.company.catchPhraseNoun(); },
        catchPhrase_: function () { return faker.company.catchPhrase(); },
        companyName_: function () { return faker.company.companyName(); },
        companySuffix_: function () { return faker.company.companySuffix(); },
        suffixes_: function () { return faker.company.suffixes(); },
    };
}
exports.default = businessMock;
//# sourceMappingURL=mock-company.js.map