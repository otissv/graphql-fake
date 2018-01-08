const faker = require('faker');

export default function hackerMock ({
  locale
}: IMocksArgs): IHacker {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    hackerAbbreviation_: () => faker.hacker.abbreviation(),
    hackerAdjective_:    () => faker.hacker.adjective(),
    hackerNoun_:         () => faker.hacker.noun(),
    hackerVerb_:         () => faker.hacker.verb(),
    hackerIngverb_:      () => faker.hacker.ingverb(),
    hackerPhrase_:       () => faker.hacker.phrase()
  };
}
