const faker = require('faker');

export default function commerceMock ({
  locale
}: IMocksArgs): ICommerce {
  
  if (locale) {
    faker.locale = locale;
  }

  return {
    department_:       () => faker.commerce.department(),
    productName_:      () => faker.commerce.productName(),
    price_:            () => faker.commerce.price(),
    productAdjective_: () => faker.commerce.productAdjective(),
    productMaterial_:  () => faker.commerce.productMaterial(),
    product_:          () => faker.commerce.product()
  };
}

