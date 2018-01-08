import * as casual from 'casual';

const faker = require('faker');

export default function internetMock ({
  locale
}: IMocksArgs): IInternet {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    ip_:           () => faker.internet.ip(),
    domainName_:   () => faker.internet.domainName(),
    url_:          () => faker.internet.url(),
    userAgent_:    () => faker.internet.userAgent(),
    exampleEmail_: () => faker.internet.exampleEmail(),
    protocol_:     () => faker.internet.protocol(),
    domainSuffix_: () => faker.internet.domainSuffix(),
    domainWord_:   () => faker.internet.domainWord(),
    ipv6_:         () => faker.internet.ipv6(),
    mac_:          () => faker.internet.mac(),
    website_:      () => faker.internet.domainName(),
    cc_:           () => [faker.internet.email()],
    bc_:           () => [faker.internet.email()],
    sender_:       () => [faker.internet.email()],
    recipient_:    () => [faker.internet.email()],
    body_:         () => faker.lorem.paragraphs(),
    subject_:      () => casual.title
  };
}
