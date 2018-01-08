"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_database_1 = require("./schema/schemaFields-database");
var mock_database_1 = require("./mock-database");
var schema_database_1 = require("./schema/schema-database");
var schemaQueries_database_1 = require("./schema/schemaQueries-database");
exports.default = {
    fields: schemaFields_database_1.default,
    mocks: mock_database_1.default,
    schema: schema_database_1.default,
    schemaQueries: schemaQueries_database_1.default
};
//# sourceMappingURL=index.js.map