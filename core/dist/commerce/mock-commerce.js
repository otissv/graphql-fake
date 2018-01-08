"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function commerceMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        department_: function () { return faker.commerce.department(); },
        productName_: function () { return faker.commerce.productName(); },
        price_: function () { return faker.commerce.price(); },
        productAdjective_: function () { return faker.commerce.productAdjective(); },
        productMaterial_: function () { return faker.commerce.productMaterial(); },
        product_: function () { return faker.commerce.product(); }
    };
}
exports.default = commerceMock;
//# sourceMappingURL=mock-commerce.js.map