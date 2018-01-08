"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var faker = require('faker');
function internetMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        ip_: function () { return faker.internet.ip(); },
        domainName_: function () { return faker.internet.domainName(); },
        url_: function () { return faker.internet.url(); },
        userAgent_: function () { return faker.internet.userAgent(); },
        exampleEmail_: function () { return faker.internet.exampleEmail(); },
        protocol_: function () { return faker.internet.protocol(); },
        domainSuffix_: function () { return faker.internet.domainSuffix(); },
        domainWord_: function () { return faker.internet.domainWord(); },
        ipv6_: function () { return faker.internet.ipv6(); },
        mac_: function () { return faker.internet.mac(); },
        website_: function () { return faker.internet.domainName(); },
        cc_: function () { return [faker.internet.email()]; },
        bc_: function () { return [faker.internet.email()]; },
        sender_: function () { return [faker.internet.email()]; },
        recipient_: function () { return [faker.internet.email()]; },
        body_: function () { return faker.lorem.paragraphs(); },
        subject_: function () { return casual.title; }
    };
}
exports.default = internetMock;
//# sourceMappingURL=mock-internet.js.map