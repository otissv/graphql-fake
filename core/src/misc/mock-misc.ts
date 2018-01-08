import * as casual from 'casual';

const faker = require('faker');

export default function miscMock ({ 
  locale 
}: IMocksArgs): IMisc {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    languageCode_: () => casual.language_code,
    locale_:       () => faker.random.locale(),
    boolean_:      () => faker.random.boolean(),
    alphaNumeric_: () => faker.random.alphaNumeric(),
    randomize_:    () => faker.helpers.randomize()
  };
}
