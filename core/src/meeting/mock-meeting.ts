
import * as casual from 'casual';
import { getDates } from '../helpers';
import user from '../user/mock-user';
import address from '../address/mock-address';

const faker = require('faker');

export default function meetingMock ({ 
  locale  = 'en',
  roles = ['user']
}: IMocksArgs): IMeeting {

  if (locale) {
    faker.locale = locale;
  }
  
  return {
    allDay_:      () => faker.random.boolean(),
    address_:     () => address({ locale }),
    invited_:     () => 
    [
      user({ locale, roles }), 
      user({ locale, roles }),
      user({ locale, roles })
    ],
    description_: () => faker.lorem.sentence(),
    end_:         () => getDates().endDate,
    start_:       () => getDates().startDate,
    title_:       () => casual.title
  };
};
