"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function personMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        email_: function () { return faker.internet.email(); },
        firstName_: function () { return faker.name.firstName(); },
        fullName_: function () { return faker.name.firstName() + " " + faker.name.lastName(); },
        jobArea_: function () { return faker.name.jobArea(); },
        jobDescriptor_: function () { return faker.name.jobDescriptor(); },
        jobTitle_: function () { return faker.name.title(); },
        jobType_: function () { return faker.name.jobType(); },
        lastName_: function () { return faker.name.lastName(); },
        name_: function () { return faker.name.prefix() + " " + faker.name.firstName() + " " + faker.name.lastName(); },
        namePrefix_: function () { return faker.name.prefix(); },
        nameSuffix_: function () { return faker.name.suffix(); },
        password_: function () { return faker.internet.password(); },
        username_: function () { return faker.internet.userName(); },
    };
}
exports.default = personMock;
//# sourceMappingURL=mock-person.js.map