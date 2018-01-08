"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function databaseMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        column_: function () { return faker.database.column(); },
        type_: function () { return faker.database.type(); },
        collation_: function () { return faker.database.collation(); },
        engine_: function () { return faker.database.engine(); }
    };
}
exports.default = databaseMock;
//# sourceMappingURL=mock-database.js.map