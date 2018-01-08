"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var helpers_1 = require("../helpers");
var faker = require('faker');
function addressMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        country_: function () { return faker.address.country(); },
        city_: function () { return faker.address.city(); },
        zipCode_: function () { return faker.address.zipCode(); },
        streetSuffix_: function () { return faker.address.streetSuffix(); },
        streetPrefix_: function () { return faker.address.streetPrefix(); },
        streetName_: function () { return faker.address.streetPrefix(); },
        streetAddress_: function () { return faker.address.streetAddress(); },
        state_: function () { return faker.address.state(); },
        stateAbbr_: function () { return faker.address.stateAbbr(); },
        latitude_: function () { return faker.address.latitude(); },
        longitude_: function () { return faker.address.longitude(); },
        buildingNumber_: function () { return casual.building_number; },
        countryCode_: function () { return faker.address.countryCode(); },
        cityPrefix_: function () { return faker.address.citySuffix(); },
        citySuffix_: function () { return faker.address.citySuffix(); },
        room_: function () { return helpers_1.randomNumber(1, 1000); }
    };
}
exports.default = addressMock;
//# sourceMappingURL=mock-address.js.map