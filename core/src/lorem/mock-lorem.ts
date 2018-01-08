import * as casual from 'casual';

const faker = require('faker');

export default function loremMock ({ 
  arrayOfWords = 7,
  locale,
  sentences = 3,
  words = 7
}: IMocksArgs): ILorem {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    sentence_:         () => faker.lorem.sentence(),
    sentences_:        () => casual.sentences(sentences),
    title_:            () => casual.title,
    text_:             () => faker.lorem.text(),
    description_:      () => casual.description,
    shortDescription_: () => casual.short_description,
    string_:           () => casual.string,
    word_:             () => faker.lorem.word(),
    words_:            () => casual.words(words),
    arrayOfWords_:     () => casual.array_of_words(arrayOfWords),
    letter_:           () => faker.helpers.randomize(),
    paragraph_:        () => faker.lorem.paragraph(),
    paragraphs_:       () => faker.lorem.paragraphs(),
    slug_:             () => faker.lorem.slug(),
    lines_:            () => faker.lorem.lines()
  };
}

