"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaFields_transaction_1 = require("../../transaction/schema/schemaFields-transaction");
var schemaFields_card_1 = require("../../card/schema/schemaFields-card");
var field_nested_1 = require("../../nested/field-nested");
exports.default = "\n# Generates a list of mock cardTransactions\ntype CardTransaction_ {\n  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' \n  id_: String\n  " + schemaFields_transaction_1.default + "\n  " + schemaFields_card_1.default + "\n  " + field_nested_1.default + "\n}";
//# sourceMappingURL=schema-cardTransaction.js.map