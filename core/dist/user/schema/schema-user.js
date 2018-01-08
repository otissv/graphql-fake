"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_user_1 = require("./schemaFields-user");
var field_nested_1 = require("../../nested/field-nested");
exports.default = "\n# Generates a list of mock users\ntype User_ {\n  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' \n  id_:            String,\n  \n  " + schemaFields_user_1.default + "\n  " + field_nested_1.default + "\n}";
//# sourceMappingURL=schema-user.js.map