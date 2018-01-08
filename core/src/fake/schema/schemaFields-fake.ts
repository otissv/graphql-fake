import address from '../../address';
import card from '../../card';
import color from '../../color';
import commerce from '../../commerce';
import company from '../../company';
import currency from '../../currency';
import database from '../../database';
import dateTime from '../../dateTime';
import finance from '../../finance';
import hacker from '../../hacker';
import image from '../../image';
import internet from '../../internet';
import lorem from '../../lorem';
import misc from '../../misc';
import numbers from '../../numbers';
import person from '../../person';
import phone from '../../phone';
import system from '../../system';


export default `
  ${address.fields}
  ${card.fields}
  ${color.fields}
  ${commerce.fields}
  ${company.fields}
  ${currency.fields}
  ${database.fields}
  ${dateTime.fields}
  ${finance.fields}
  ${hacker.fields}
  ${image.fields}
  ${internet.fields}
  ${lorem.fields}
  ${misc.fields}
  ${numbers.fields}
  ${person.fields}
  ${phone.fields}
  ${system.fields}
`;
