import * as moment from 'moment';
import user from '../user/mock-user';

const faker = require('faker');

export default function metaMock ({
  locale = 'en',
  roles = ['user']
}: IMocksArgs): IMeta {

  if (locale) {
    faker.locale = locale;
  }
  
  return {
    created_:   () => moment(faker.date.past()).toISOString(),
    createdBy_: () => user({ roles }),
    updated_:   () => moment(faker.date.recent()).toISOString(),
    updatedBy_: () => user({ roles })
  };
};
