import * as casual from 'casual';

const faker = require('faker');


export default function cardTransactionMock ({
  cardVendor,
  locale  = 'en'
}: IMocksArgs): ICardTransaction {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    currencyCode_:   () => faker.finance.currencyCode(),
    currencySymbol_: () => faker.finance.currencySymbol(),
    currencyName_:   () => faker.finance.currencyName(),
    cardType_:       () => casual.card_type,
    cardNumber_:     () => casual.card_number(cardVendor),
    cardExp_:        () => casual.card_exp,
    cardData_:       () => casual.card_data,
    ...faker.helpers.createCard().accountHistory[0]
  };
};
