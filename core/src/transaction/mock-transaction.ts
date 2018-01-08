import * as casual from 'casual';
import * as moment from 'moment';

const faker = require('faker');

export default function transactionMock ({ 
  cardVendor, 
  locale 
}: IMocksArgs): ITransaction {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    account_:        () => faker.finance.account(),
    amount_:         () => faker.finance.amount(),
    company_:        () => faker.company.companyName(),
    currencyCode_:   () => faker.finance.currencyCode(),
    currencyName_:   () => faker.finance.currencyName(),
    currencySymbol_: () => faker.finance.currencySymbol(),
    date_:           () => moment(faker.date.past()).toISOString(),
    id_:             () => casual.uuid,
    name_:           () => faker.finance.accountName(),
    type_:           () => faker.finance.transactionType()
  };
};
