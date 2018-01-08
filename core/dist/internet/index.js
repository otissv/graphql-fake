"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_internet_1 = require("./schema/schemaFields-internet");
var mock_internet_1 = require("./mock-internet");
var schema_internet_1 = require("./schema/schema-internet");
var schemaQueries_internet_1 = require("./schema/schemaQueries-internet");
exports.default = {
    fields: schemaFields_internet_1.default,
    mocks: mock_internet_1.default,
    schema: schema_internet_1.default,
    schemaQueries: schemaQueries_internet_1.default
};
//# sourceMappingURL=index.js.map