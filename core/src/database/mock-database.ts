const faker = require('faker');

export default function databaseMock ({
  locale
}: IMocksArgs): IDatabase {
  
  if (locale) {
    faker.locale = locale;
  }

  return {
    column_:    () => faker.database.column(),
    type_:      () => faker.database.type(),
    collation_: () => faker.database.collation(),
    engine_:    () => faker.database.engine()
  };
}
