import * as casual from 'casual';
import { randomNumber } from '../helpers';

const faker = require('faker');

export default function numbersMock ({
    arrayOfDigits = 7,
    arrayOfDoubles = 7,
    arrayOfIntegers = 7,
    doubleFrom = -1000, 
    doubleTo = 1000,
    integerFrom = -1000, 
    integerTo = 1000,
    locale,
    randomFrom = 0,
    randomTo = 1000
  }: IMocksArgs): INumbers {
    
  if (locale) {
    faker.locale = locale;
  }

  return {
    random_:           () => faker.random.number,
    integer_:          () => casual.integer(integerFrom, integerTo),
    double_:           () => casual.double(doubleFrom, doubleTo),
    arrayOfDigits_:    () => casual.array_of_digits(arrayOfDigits),
    arrayOfIntegers_:  () => casual.array_of_integers(arrayOfIntegers),
    arrayOfDoubles_:   () => casual.array_of_doubles(arrayOfDoubles),
    randomBetween_:    () => randomNumber(randomFrom, randomTo)
  };
}


