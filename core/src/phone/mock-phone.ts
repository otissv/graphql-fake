const faker = require('faker');

export default function phoneMock ({ 
  locale 
}: IMocksArgs): IPhone {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    phoneFormats_:      () => faker.phone.phoneFormats(),
    phoneNumberFormat_: () => faker.phone.phoneNumberFormat(),
    phoneNumber_:       () => faker.phone.phoneNumber()
  };
}
