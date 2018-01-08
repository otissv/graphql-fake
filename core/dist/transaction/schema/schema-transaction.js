"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_transaction_1 = require("./schemaFields-transaction");
var field_nested_1 = require("../../nested/field-nested");
var schemaFields_currency_1 = require("../../currency/schema/schemaFields-currency");
exports.default = "\n# Generates a list of mock transactions\ntype Transaction_ {\n  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' \n  id_: String\n  " + schemaFields_transaction_1.default + "\n  " + schemaFields_currency_1.default + "\n  " + field_nested_1.default + "\n}";
//# sourceMappingURL=schema-transaction.js.map