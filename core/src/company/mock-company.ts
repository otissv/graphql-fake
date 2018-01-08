const faker = require('faker');

export default function businessMock ({
  locale
}: IMocksArgs): ICompany {
  
  if (locale) {
    faker.locale = locale;
  }

  return {
    bsAdjective_:           () => faker.company.bsAdjective(),
    bsBuzz_:                () => faker.company.bsBuzz(),
    bsNoun_:                () => faker.company.bsNoun(),
    bs_:                    () => faker.company.bs(),
    catchPhraseAdjective_:  () => faker.company.catchPhraseAdjective(),
    catchPhraseDescriptor_: () => faker.company.catchPhraseDescriptor(),
    catchPhraseNoun_:       () => faker.company.catchPhraseNoun(),
    catchPhrase_:           () => faker.company.catchPhrase(),
    companyName_:           () => faker.company.companyName(),
    companySuffix_:         () => faker.company.companySuffix(),
    suffixes_:              () => faker.company.suffixes(),
  };
}
