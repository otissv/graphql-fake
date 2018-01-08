"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_address_1 = require("../address/mock-address");
var faker = require('faker');
function userMock(_a) {
    var _b = _a.locale, locale = _b === void 0 ? 'en' : _b, _c = _a.roles, roles = _c === void 0 ? ['user'] : _c;
    if (locale) {
        faker.locale = locale;
    }
    return {
        id_: function () { return faker.random.uuid(); },
        avatar_: function () { return faker.image.avatar(); },
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
        address_: function () { return mock_address_1.default({ locale: locale }); },
        company_: {
            id_: function () { return faker.random.uuid(); },
            companyName_: function () { return faker.company.companyName(); }
        },
        phoneNumber_: function () { return faker.phone.phoneNumber(); },
        website_: function () { return faker.internet.domainName(); },
        roles_: function () { return roles; }
    };
}
exports.default = userMock;
//# sourceMappingURL=mock-user.js.map