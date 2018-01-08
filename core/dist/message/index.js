"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_message_1 = require("./schema/schemaFields-message");
var mock_message_1 = require("./mock-message");
var schema_message_1 = require("./schema/schema-message");
var schemaQueries_message_1 = require("./schema/schemaQueries-message");
exports.default = {
    fields: schemaFields_message_1.default,
    mocks: mock_message_1.default,
    schema: schema_message_1.default,
    schemaQueries: schemaQueries_message_1.default
};
//# sourceMappingURL=index.js.map