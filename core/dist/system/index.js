"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_system_1 = require("./schema/schemaFields-system");
var mock_system_1 = require("./mock-system");
var schema_system_1 = require("./schema/schema-system");
var schemaQueries_system_1 = require("./schema/schemaQueries-system");
exports.default = {
    fields: schemaFields_system_1.default,
    mocks: mock_system_1.default,
    schema: schema_system_1.default,
    schemaQueries: schemaQueries_system_1.default
};
//# sourceMappingURL=index.js.map