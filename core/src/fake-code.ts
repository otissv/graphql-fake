import address from './address';
import card from './card';
import cardTransaction from './cardTransaction';
import color from './color';
import commerce from './commerce';
import company from './company';
import currency from './currency';
import database from './database';
import dateTime from './dateTime';
import fake from './fake';
import finance from './finance';
import hacker from './hacker';
import image from './image';
import internet from './internet';
import lorem from './lorem';
import meeting from './meeting';
import message from './message';
import meta from './meta';
import misc from './misc';
import numbers from './numbers';
import person from './person';
import phone from './phone';
import system from './system';
import transaction from './transaction';
import user from './user';
import nested from './nested';


const fields = `
  ${fake.fields}
  ${nested.fields}
`;

const mocks = fake.mocks;

const resolvers = {

};


const schemaQueries = `
  ${address.schemaQueries}

`;


// ${card.schemaQueries}
// ${cardTransaction.schemaQueries}
// ${color.schemaQueries}
// ${commerce.schemaQueries}
// ${company.schemaQueries}
// ${currency.schemaQueries}
// ${database.schemaQueries}
// ${dateTime.schemaQueries}
// ${fake.schemaQueries}
// ${finance.schemaQueries}
// ${hacker.schemaQueries}
// ${image.schemaQueries}
// ${internet.schemaQueries}
// ${lorem.schemaQueries}
// ${meeting.schemaQueries}
// ${message.schemaQueries}
// ${meta.schemaQueries}
// ${misc.schemaQueries}
// ${numbers.schemaQueries}
// ${person.schemaQueries}
// ${phone.schemaQueries}
// ${system.schemaQueries}
// ${transaction.schemaQueries}
// ${user.schemaQueries}
const schemaTypeDefinitions = `
  ${address.schema}
  
`;

// ${card.schema}
//   ${cardTransaction.schema}
//   ${color.schema}
//   ${commerce.schema}
//   ${company.schema}
//   ${currency.schema}
//   ${database.schema}
//   ${dateTime.schema}
//   ${fake.schema}
//   ${finance.schema}
//   ${hacker.schema}
//   ${image.schema}
//   ${internet.schema}
//   ${lorem.schema}
//   ${meeting.schema}
//   ${message.schema}
//   ${meta.schema}
//   ${misc.schema}
//   ${numbers.schema}
//   ${person.schema}
//   ${phone.schema}
//   ${system.schema}
//   ${transaction.schema}
//   ${user.schema}

const schema = `
  ${schemaTypeDefinitions}
  ${schemaQueries}
`;


export default {
  fields,
  mocks,
  resolvers,
  schema,
  schemaQueries,
  schemaTypeDefinitions
};
