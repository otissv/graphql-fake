"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_transaction_1 = require("./schema/schemaFields-transaction");
var mock_transaction_1 = require("./mock-transaction");
var schema_transaction_1 = require("./schema/schema-transaction");
var schemaQueries_transaction_1 = require("./schema/schemaQueries-transaction");
exports.default = {
    fields: schemaFields_transaction_1.default,
    mocks: mock_transaction_1.default,
    schema: schema_transaction_1.default,
    schemaQueries: schemaQueries_transaction_1.default
};
//# sourceMappingURL=index.js.map