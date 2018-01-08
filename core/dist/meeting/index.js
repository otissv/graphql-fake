"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_meeting_1 = require("./schema/schemaFields-meeting");
var mock_meeting_1 = require("./mock-meeting");
var schema_meeting_1 = require("./schema/schema-meeting");
var schemaQueries_meeting_1 = require("./schema/schemaQueries-meeting");
exports.default = {
    fields: schemaFields_meeting_1.default,
    mocks: mock_meeting_1.default,
    schema: schema_meeting_1.default,
    schemaQueries: schemaQueries_meeting_1.default
};
//# sourceMappingURL=index.js.map