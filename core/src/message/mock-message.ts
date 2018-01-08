import * as casual from 'casual';
import * as moment from 'moment';

const faker = require('faker');

export default function messageMock ({
  locale  = 'en'
}: IMocksArgs): IMessage {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    from_:    () => faker.internet.email(),
    to_:      () => [faker.internet.email()],
    date_:    () => moment(faker.date.past()).toISOString(),
    cc_:      () => [faker.internet.email()],
    body_:    () => faker.lorem.paragraphs(),
    subject_: () => casual.title
  };
};
