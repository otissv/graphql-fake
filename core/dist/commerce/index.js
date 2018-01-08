"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_commerce_1 = require("./schema/schemaFields-commerce");
var mock_commerce_1 = require("./mock-commerce");
var schema_commerce_1 = require("./schema/schema-commerce");
var schemaQueries_commerce_1 = require("./schema/schemaQueries-commerce");
exports.default = {
    fields: schemaFields_commerce_1.default,
    mocks: mock_commerce_1.default,
    schema: schema_commerce_1.default,
    schemaQueries: schemaQueries_commerce_1.default
};
//# sourceMappingURL=index.js.map