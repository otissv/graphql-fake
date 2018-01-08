"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_finance_1 = require("./schema/schemaFields-finance");
var mock_finance_1 = require("./mock-finance");
var schema_finance_1 = require("./schema/schema-finance");
var schemaQueries_finance_1 = require("./schema/schemaQueries-finance");
exports.default = {
    fields: schemaFields_finance_1.default,
    mocks: mock_finance_1.default,
    schema: schema_finance_1.default,
    schemaQueries: schemaQueries_finance_1.default
};
//# sourceMappingURL=index.js.map