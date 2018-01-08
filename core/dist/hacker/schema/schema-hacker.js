"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_hacker_1 = require("./schemaFields-hacker");
var field_nested_1 = require("../../nested/field-nested");
exports.default = "\n# Generates a list of mock hackers\ntype Hacker_ {\n  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' \n  id_:            String,\n  \n  " + schemaFields_hacker_1.default + "\n  " + field_nested_1.default + "\n}";
//# sourceMappingURL=schema-hacker.js.map