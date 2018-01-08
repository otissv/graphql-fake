"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var helpers_1 = require("../helpers");
var faker = require('faker');
function numbersMock(_a) {
    var _b = _a.arrayOfDigits, arrayOfDigits = _b === void 0 ? 7 : _b, _c = _a.arrayOfDoubles, arrayOfDoubles = _c === void 0 ? 7 : _c, _d = _a.arrayOfIntegers, arrayOfIntegers = _d === void 0 ? 7 : _d, _e = _a.doubleFrom, doubleFrom = _e === void 0 ? -1000 : _e, _f = _a.doubleTo, doubleTo = _f === void 0 ? 1000 : _f, _g = _a.integerFrom, integerFrom = _g === void 0 ? -1000 : _g, _h = _a.integerTo, integerTo = _h === void 0 ? 1000 : _h, locale = _a.locale, _j = _a.randomFrom, randomFrom = _j === void 0 ? 0 : _j, _k = _a.randomTo, randomTo = _k === void 0 ? 1000 : _k;
    if (locale) {
        faker.locale = locale;
    }
    return {
        random_: function () { return faker.random.number; },
        integer_: function () { return casual.integer(integerFrom, integerTo); },
        double_: function () { return casual.double(doubleFrom, doubleTo); },
        arrayOfDigits_: function () { return casual.array_of_digits(arrayOfDigits); },
        arrayOfIntegers_: function () { return casual.array_of_integers(arrayOfIntegers); },
        arrayOfDoubles_: function () { return casual.array_of_doubles(arrayOfDoubles); },
        randomBetween_: function () { return helpers_1.randomNumber(randomFrom, randomTo); }
    };
}
exports.default = numbersMock;
//# sourceMappingURL=mock-numbers.js.map