const faker = require('faker');

export default function personMock ({ 
  locale 
}: IMocksArgs): IPerson {
  if (locale) {

    faker.locale = locale;
  }
  
  return {
    email_:         () => faker.internet.email(),
    firstName_:     () => faker.name.firstName(),
    fullName_:      () => `${faker.name.firstName()} ${faker.name.lastName()}`,
    jobArea_:       () => faker.name.jobArea(),
    jobDescriptor_: () => faker.name.jobDescriptor(),
    jobTitle_:      () => faker.name.title(),
    jobType_:       () => faker.name.jobType(),
    lastName_:      () => faker.name.lastName(),
    name_:          () => `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`,
    namePrefix_:    () => faker.name.prefix(),
    nameSuffix_:    () => faker.name.suffix(),
    password_:      () => faker.internet.password(),
    username_:      () => faker.internet.userName(),
  };
}
