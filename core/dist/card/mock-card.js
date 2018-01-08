"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
function cardMock(_a) {
    var cardVendor = _a.cardVendor, locale = _a.locale;
    return {
        cardType_: function () { return casual.card_type; },
        cardNumber_: function () { return casual.card_number(cardVendor); },
        cardExp_: function () { return casual.card_exp; },
    };
}
exports.default = cardMock;
//# sourceMappingURL=mock-card.js.map