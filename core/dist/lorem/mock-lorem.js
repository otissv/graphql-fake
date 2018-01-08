"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
var faker = require('faker');
function loremMock(_a) {
    var _b = _a.arrayOfWords, arrayOfWords = _b === void 0 ? 7 : _b, locale = _a.locale, _c = _a.sentences, sentences = _c === void 0 ? 3 : _c, _d = _a.words, words = _d === void 0 ? 7 : _d;
    if (locale) {
        faker.locale = locale;
    }
    return {
        sentence_: function () { return faker.lorem.sentence(); },
        sentences_: function () { return casual.sentences(sentences); },
        title_: function () { return casual.title; },
        text_: function () { return faker.lorem.text(); },
        description_: function () { return casual.description; },
        shortDescription_: function () { return casual.short_description; },
        string_: function () { return casual.string; },
        word_: function () { return faker.lorem.word(); },
        words_: function () { return casual.words(words); },
        arrayOfWords_: function () { return casual.array_of_words(arrayOfWords); },
        letter_: function () { return faker.helpers.randomize(); },
        paragraph_: function () { return faker.lorem.paragraph(); },
        paragraphs_: function () { return faker.lorem.paragraphs(); },
        slug_: function () { return faker.lorem.slug(); },
        lines_: function () { return faker.lorem.lines(); }
    };
}
exports.default = loremMock;
//# sourceMappingURL=mock-lorem.js.map