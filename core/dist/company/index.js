"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_company_1 = require("./schema/schemaFields-company");
var mock_company_1 = require("./mock-company");
var schema_company_1 = require("./schema/schema-company");
var schemaQueries_company_1 = require("./schema/schemaQueries-company");
exports.default = {
    fields: schemaFields_company_1.default,
    mocks: mock_company_1.default,
    schema: schema_company_1.default,
    schemaQueries: schemaQueries_company_1.default
};
//# sourceMappingURL=index.js.map