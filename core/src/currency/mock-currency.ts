const faker = require('faker');

export default function currencyMock ({ 
  locale 
}: IMocksArgs): ICurrency {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    currencyCode_:    () => faker.finance.currencyCode(),
    currencySymbol_:  () => faker.finance.currencySymbol(),
    currencyName_:    () => faker.finance.currencyName(),
  };
}
