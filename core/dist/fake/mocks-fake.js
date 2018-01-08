"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("../address");
var card_1 = require("../card");
// import cardTransaction from '../cardTransaction';
var color_1 = require("../color");
var commerce_1 = require("../commerce");
var company_1 = require("../company");
var currency_1 = require("../currency");
var database_1 = require("../database");
var dateTime_1 = require("../dateTime");
// import fake from '../fake';
var dateTime_2 = require("../dateTime");
var hacker_1 = require("../hacker");
var image_1 = require("../image");
var internet_1 = require("../internet");
var lorem_1 = require("../lorem");
// import meeting from '../meeting';
// import message from '../message';
// import meta from '../meta';
var misc_1 = require("../misc");
var numbers_1 = require("../numbers");
var person_1 = require("../person");
var phone_1 = require("../phone");
var system_1 = require("../system");
// import transaction from '../transaction';
// import user from '../user';
function fakeMocks(_a) {
    var _b = _a.arrayOfDigits, arrayOfDigits = _b === void 0 ? 7 : _b, _c = _a.arrayOfDoubles, arrayOfDoubles = _c === void 0 ? 7 : _c, _d = _a.arrayOfIntegers, arrayOfIntegers = _d === void 0 ? 7 : _d, _e = _a.arrayOfWords, arrayOfWords = _e === void 0 ? 7 : _e, _f = _a.cardVendor, cardVendor = _f === void 0 ? 'Visa' : _f, customBoolean = _a.customBoolean, customFloat = _a.customFloat, customID = _a.customID, customInt = _a.customInt, customString = _a.customString, _g = _a.dataFormat, dataFormat = _g === void 0 ? 'YYYY-MM-DD' : _g, _h = _a.doubleFrom, doubleFrom = _h === void 0 ? -1000 : _h, _j = _a.doubleTo, doubleTo = _j === void 0 ? 1000 : _j, _k = _a.height, height = _k === void 0 ? '480' : _k, _l = _a.integerFrom, integerFrom = _l === void 0 ? -1000 : _l, _m = _a.integerTo, integerTo = _m === void 0 ? 1000 : _m, _o = _a.length, length = _o === void 0 ? 1 : _o, _p = _a.locale, locale = _p === void 0 ? 'en' : _p, parameters = _a.parameters, _q = _a.randomFrom, randomFrom = _q === void 0 ? 0 : _q, _r = _a.randomTo, randomTo = _r === void 0 ? 1000 : _r, _s = _a.roles, roles = _s === void 0 ? ['user'] : _s, _t = _a.sentences, sentences = _t === void 0 ? 3 : _t, _u = _a.timeFormat, timeFormat = _u === void 0 ? 'HH_:mm_:ss' : _u, _v = _a.width, width = _v === void 0 ? '640' : _v, _w = _a.words, words = _w === void 0 ? 7 : _w, customIntList = _a.customIntList, customFloatList = _a.customFloatList, customStringList = _a.customStringList, customBooleanList = _a.customBooleanList, customIDList = _a.customIDList;
    return __assign({}, address_1.default.mocks({
        locale: locale
    }), card_1.default.mocks({
        cardVendor: cardVendor,
        locale: locale
    }), color_1.default.mocks({
        locale: locale
    }), commerce_1.default.mocks({
        locale: locale
    }), company_1.default.mocks({
        locale: locale
    }), currency_1.default.mocks({
        locale: locale
    }), database_1.default.mocks({
        locale: locale
    }), dateTime_1.default.mocks({
        dataFormat: dataFormat,
        locale: locale,
        timeFormat: timeFormat
    }), dateTime_2.default.mocks({
        locale: locale
    }), hacker_1.default.mocks({
        locale: locale
    }), image_1.default.mocks({
        height: height,
        locale: locale,
        width: width,
    }), internet_1.default.mocks({
        locale: locale
    }), lorem_1.default.mocks({
        arrayOfWords: arrayOfWords,
        locale: locale,
        sentences: sentences,
        words: words,
    }), misc_1.default.mocks({
        locale: locale
    }), numbers_1.default.mocks({
        arrayOfDigits: arrayOfDigits,
        arrayOfDoubles: arrayOfDoubles,
        arrayOfIntegers: arrayOfIntegers,
        doubleFrom: doubleFrom,
        doubleTo: doubleTo,
        integerFrom: integerFrom,
        integerTo: integerTo,
        locale: locale,
        randomFrom: randomFrom,
        randomTo: randomTo
    }), person_1.default.mocks({
        locale: locale
    }), phone_1.default.mocks({
        locale: locale
    }), system_1.default.mocks({
        locale: locale
    }));
}
exports.default = fakeMocks;
// ...fake.mocks({
//       locale,
//       arrayOfDigits,
//       arrayOfDoubles,
//       arrayOfIntegers,
//       arrayOfWords,
//       cardVendor,
//       dataFormat,
//       doubleFrom,
//       doubleTo,
//       height,
//       integerFrom,
//       integerTo,
//       parameters,
//       randomFrom,
//       randomTo,
//       roles,
//       sentences,
//       timeFormat,
//       width,
//       words,
//       customInt,
//       customFloat,
//       customString,
//       customBoolean,
//       customID,
//       customIntList,
//       customFloatList,
//       customStringList,
//       customBooleanList,
//       customIDList
//     }), 
//# sourceMappingURL=mocks-fake.js.map