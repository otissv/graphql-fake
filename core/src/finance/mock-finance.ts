const faker = require('faker');

export default function financeMock ({
  locale
}: IMocksArgs): IFinance {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    account_:         () => faker.finance.account(),
    accountName_:     () => faker.finance.accountName(),
    mask_:            () => faker.finance.mask(),
    amount_:          () => faker.finance.amount(),
    transactionType_: () => faker.finance.transactionType(),
    bitcoinAddress_:  () => faker.finance.bitcoinAddress(),
    iban_:            () => faker.finance.iban(),
    bic_:             () => faker.finance.bic()
  };
}
