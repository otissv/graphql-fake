"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_person_1 = require("./schema/schemaFields-person");
var mock_person_1 = require("./mock-person");
var schema_person_1 = require("./schema/schema-person");
var schemaQueries_person_1 = require("./schema/schemaQueries-person");
exports.default = {
    fields: schemaFields_person_1.default,
    mocks: mock_person_1.default,
    schema: schema_person_1.default,
    schemaQueries: schemaQueries_person_1.default
};
//# sourceMappingURL=index.js.map