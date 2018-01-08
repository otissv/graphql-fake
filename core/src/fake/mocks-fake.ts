import address from '../address';
import card from '../card';
// import cardTransaction from '../cardTransaction';
import color from '../color';
import commerce from '../commerce';
import company from '../company';
import currency from '../currency';
import database from '../database';
import dateTime from '../dateTime';
// import fake from '../fake';
import finance from '../dateTime';
import hacker from '../hacker';
import image from '../image';
import internet from '../internet';
import lorem from '../lorem';
// import meeting from '../meeting';
// import message from '../message';
// import meta from '../meta';
import misc from '../misc';
import numbers from '../numbers';
import person from '../person';
import phone from '../phone';
import system from '../system';
// import transaction from '../transaction';
// import user from '../user';


export default function fakeMocks ({
  arrayOfDigits = 7,
  arrayOfDoubles = 7,
  arrayOfIntegers = 7,
  arrayOfWords = 7,
  cardVendor = 'Visa',
  customBoolean,
  customFloat,
  customID,
  customInt,
  customString,
  dataFormat = 'YYYY-MM-DD',
  doubleFrom = -1000,
  doubleTo = 1000,
  height = '480',
  integerFrom = -1000,
  integerTo = 1000,
  length = 1,
  locale = 'en',
  parameters,
  randomFrom = 0,
  randomTo = 1000,
  roles = ['user'],
  sentences = 3,
  timeFormat = 'HH_:mm_:ss',
  width = '640',
  words = 7,

  customIntList,
  customFloatList,
  customStringList,
  customBooleanList,
  customIDList
}: IMocksArgs): any {
  return {
    ...address.mocks({
      locale
    }),
    ...card.mocks({
      cardVendor, 
      locale
    }),
    ...color.mocks({ 
      locale 
    }),
    ...commerce.mocks({ 
      locale 
    }),
    ...company.mocks({ 
      locale 
    }),
    ...currency.mocks({ 
      locale 
    }),
    ...database.mocks({ 
      locale 
    }),
    ...dateTime.mocks({ 
      dataFormat,
      locale,
      timeFormat 
    }),
    ...finance.mocks({ 
      locale 
    }),
    ...hacker.mocks({ 
      locale 
    }),
    ...image.mocks({ 
      height,
      locale,
      width, 
    }),
    ...internet.mocks({ 
      locale 
    }),
    ...lorem.mocks({ 
      arrayOfWords,
      locale,
      sentences,
      words,
    }),
    ...misc.mocks({ 
      locale 
    }),
    ...numbers.mocks({ 
      arrayOfDigits,
      arrayOfDoubles,
      arrayOfIntegers,
      doubleFrom, 
      doubleTo,
      integerFrom, 
      integerTo,
      locale,
      randomFrom,
      randomTo 
    }),
    ...person.mocks({ 
      locale 
    }),
    ...phone.mocks({ 
      locale 
    }),
    ...system.mocks({ 
      locale 
    })
  };
}


// ...fake.mocks({
//       locale,
//       arrayOfDigits,
//       arrayOfDoubles,
//       arrayOfIntegers,
//       arrayOfWords,
//       cardVendor,
//       dataFormat,
//       doubleFrom,
//       doubleTo,
//       height,
//       integerFrom,
//       integerTo,
//       parameters,
//       randomFrom,
//       randomTo,
//       roles,
//       sentences,
//       timeFormat,
//       width,
//       words,
//       customInt,
//       customFloat,
//       customString,
//       customBoolean,
//       customID,
//       customIntList,
//       customFloatList,
//       customStringList,
//       customBooleanList,
//       customIDList
//     }),