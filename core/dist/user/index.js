"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_user_1 = require("./schema/schemaFields-user");
var mock_user_1 = require("./mock-user");
var schema_user_1 = require("./schema/schema-user");
var schemaQueries_user_1 = require("./schema/schemaQueries-user");
exports.default = {
    fields: schemaFields_user_1.default,
    mocks: mock_user_1.default,
    schema: schema_user_1.default,
    schemaQueries: schemaQueries_user_1.default
};
//# sourceMappingURL=index.js.map