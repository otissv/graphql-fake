import * as casual from 'casual';
import * as moment from 'moment';
import { getDates } from '../helpers';

const faker = require('faker');

export default function dateTimeMock ({
  dataFormat = 'YYYY-MM-DD',
  locale,
  timeFormat = 'HH_:mm_:ss'
}: IMocksArgs): IDateTime {
  if (locale) {
    faker.locale = locale;
  }

  return {
    allDay_:      () => faker.random.boolean(),
    amPm_:        () => casual.am_pm,
    between_:     () => moment(faker.date.between()).toISOString(),
    century_:     () => casual.century,
    date_:        () => casual.date(dataFormat),
    dayOfMonth_:  () => casual.day_of_month,
    dayOfWeek_:   () => casual.day_of_week,
    dayOfYear_:   () => casual.day_of_year,
    endDate_:     () => getDates().endDate,
    future_:      () => moment(faker.date.future()).toISOString(),
    monthNumber_: () => casual.month_number,
    month_:       () => faker.date.month(),
    past_:        () => moment(faker.date.past()).toISOString(),
    recent_:      () => moment(faker.date.recent()).toISOString(),
    startDAte_:   () => getDates().startDate,
    time_:        () => casual.time(timeFormat),
    timezone_:    () => casual.timezone,
    unixTime_:    () => casual.unix_time,
    weekday_:     () => faker.date.weekday(),
    year_:        () => casual.year,
  };
}
