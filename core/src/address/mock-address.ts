import * as casual from 'casual';
import { randomNumber } from '../helpers';

const faker = require('faker');

export default function addressMock ({
  locale
}: IMocksArgs ): IAddress {
  
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    country_:        () => faker.address.country(),
    city_:           () => faker.address.city(),
    zipCode_:        () => faker.address.zipCode(),
    streetSuffix_:   () => faker.address.streetSuffix(),
    streetPrefix_:   () => faker.address.streetPrefix(),
    streetName_:     () => faker.address.streetPrefix(),
    streetAddress_:  () => faker.address.streetAddress(),
    state_:          () => faker.address.state(),
    stateAbbr_:      () => faker.address.stateAbbr(),
    latitude_:       () => faker.address.latitude(),
    longitude_:      () => faker.address.longitude(),
    buildingNumber_: () => casual.building_number,
    countryCode_:    () => faker.address.countryCode(),
    cityPrefix_:     () => faker.address.citySuffix(),
    citySuffix_:     () => faker.address.citySuffix(),
    room_:           () => randomNumber(1, 1000)
  };
}
