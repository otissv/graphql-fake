"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_currency_1 = require("./schema/schemaFields-currency");
var mock_currency_1 = require("./mock-currency");
var schema_currency_1 = require("./schema/schema-currency");
var schemaQueries_currency_1 = require("./schema/schemaQueries-currency");
exports.default = {
    fields: schemaFields_currency_1.default,
    mocks: mock_currency_1.default,
    schema: schema_currency_1.default,
    schemaQueries: schemaQueries_currency_1.default
};
//# sourceMappingURL=index.js.map