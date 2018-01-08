"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function hackerMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        hackerAbbreviation_: function () { return faker.hacker.abbreviation(); },
        hackerAdjective_: function () { return faker.hacker.adjective(); },
        hackerNoun_: function () { return faker.hacker.noun(); },
        hackerVerb_: function () { return faker.hacker.verb(); },
        hackerIngverb_: function () { return faker.hacker.ingverb(); },
        hackerPhrase_: function () { return faker.hacker.phrase(); }
    };
}
exports.default = hackerMock;
//# sourceMappingURL=mock-hacker.js.map