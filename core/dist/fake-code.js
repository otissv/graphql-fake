"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var card_1 = require("./card");
var cardTransaction_1 = require("./cardTransaction");
var color_1 = require("./color");
var commerce_1 = require("./commerce");
var company_1 = require("./company");
var currency_1 = require("./currency");
var database_1 = require("./database");
var dateTime_1 = require("./dateTime");
var fake_1 = require("./fake");
var finance_1 = require("./finance");
var hacker_1 = require("./hacker");
var image_1 = require("./image");
var internet_1 = require("./internet");
var lorem_1 = require("./lorem");
var meeting_1 = require("./meeting");
var message_1 = require("./message");
var meta_1 = require("./meta");
var misc_1 = require("./misc");
var numbers_1 = require("./numbers");
var person_1 = require("./person");
var phone_1 = require("./phone");
var system_1 = require("./system");
var transaction_1 = require("./transaction");
var user_1 = require("./user");
var nested_1 = require("./nested");
var fields = "\n  " + fake_1.default.fields + "\n  " + nested_1.default.fields + "\n";
var mocks = fake_1.default.mocks;
var resolvers = {};
var schemaQueries = "\n  " + address_1.default.schemaQueries + "\n  " + card_1.default.schemaQueries + "\n  " + cardTransaction_1.default.schemaQueries + "\n  " + color_1.default.schemaQueries + "\n  " + commerce_1.default.schemaQueries + "\n  " + company_1.default.schemaQueries + "\n  " + currency_1.default.schemaQueries + "\n  " + database_1.default.schemaQueries + "\n  " + dateTime_1.default.schemaQueries + "\n  " + fake_1.default.schemaQueries + "\n  " + finance_1.default.schemaQueries + "\n  " + hacker_1.default.schemaQueries + "\n  " + image_1.default.schemaQueries + "\n  " + internet_1.default.schemaQueries + "\n  " + lorem_1.default.schemaQueries + "\n  " + meeting_1.default.schemaQueries + "\n  " + message_1.default.schemaQueries + "\n  " + meta_1.default.schemaQueries + "\n  " + misc_1.default.schemaQueries + "\n  " + numbers_1.default.schemaQueries + "\n  " + person_1.default.schemaQueries + "\n  " + phone_1.default.schemaQueries + "\n  " + system_1.default.schemaQueries + "\n  " + transaction_1.default.schemaQueries + "\n  " + user_1.default.schemaQueries + "\n";
var schemaTypeDefinitions = "\n  " + address_1.default.schema + "\n  " + card_1.default.schema + "\n  " + cardTransaction_1.default.schema + "\n  " + color_1.default.schema + "\n  " + commerce_1.default.schema + "\n  " + company_1.default.schema + "\n  " + currency_1.default.schema + "\n  " + database_1.default.schema + "\n  " + dateTime_1.default.schema + "\n  " + fake_1.default.schema + "\n  " + finance_1.default.schema + "\n  " + hacker_1.default.schema + "\n  " + image_1.default.schema + "\n  " + internet_1.default.schema + "\n  " + lorem_1.default.schema + "\n  " + meeting_1.default.schema + "\n  " + message_1.default.schema + "\n  " + meta_1.default.schema + "\n  " + misc_1.default.schema + "\n  " + numbers_1.default.schema + "\n  " + person_1.default.schema + "\n  " + phone_1.default.schema + "\n  " + system_1.default.schema + "\n  " + transaction_1.default.schema + "\n  " + user_1.default.schema + "\n";
var schema = "\n  " + schemaTypeDefinitions + "\n  " + schemaQueries + "\n";
exports.default = {
    fields: fields,
    mocks: mocks,
    resolvers: resolvers,
    schema: schema,
    schemaQueries: schemaQueries,
    schemaTypeDefinitions: schemaTypeDefinitions
};
//# sourceMappingURL=fake-code.js.map