import address from '../address/mock-address';

const faker = require('faker');


export default function userMock ({
  locale = 'en',
  roles = ['user']

}: IMocksArgs): IUser {
  if (locale) {
    faker.locale = locale;
  }

  return {
    id_:           () => faker.random.uuid(),
    avatar_:        () => faker.image.avatar(),
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
    address_:       () => address({ locale }),
    company_: {
      id_:         () => faker.random.uuid(),
      companyName_: () => faker.company.companyName()
    },
    phoneNumber_:   () => faker.phone.phoneNumber(),
    website_:       () => faker.internet.domainName(),
    roles_:         () => roles
  };
}


