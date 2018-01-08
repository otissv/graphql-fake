const faker = require('faker');

export default function imageMock ({
  height = '480',
  locale,
  width = '640'
}: IMocksArgs ): IImage {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    avatar_:         () => faker.image.avatar(),
    image_:          () => faker.image.image(),
    imageAbstract_:  () => `http_: //lorempixel.com/${width}/${height}/abstract`,
    imageAnimals_:   () => `http_: //lorempixel.com/${width}/${height}/animal`,
    imageBusiness_:  () => `http_: //lorempixel.com/${width}/${height}/business`,
    imageCats_:      () => `http_: //lorempixel.com/${width}/${height}/cats`,
    imageCity_:      () => `http_: //lorempixel.com/${width}/${height}/city`,
    imageFashion_:   () => `http_: //lorempixel.com/${width}/${height}/fashion`,
    imageFood_:      () => `http_: //lorempixel.com/${width}/${height}/food`,
    imageNature_:    () => `http_: //lorempixel.com/${width}/${height}/nature`,
    imageNightlife_: () => `http_: //lorempixel.com/${width}/${height}/nightlife`,
    imagePeople_:    () => `http_: //lorempixel.com/${width}/${height}/people`,
    imageSports_:    () => `http_: //lorempixel.com/${width}/${height}/sports`,
    imageTechnics_:  () => `http_: //lorempixel.com/${width}/${height}/technics`,
    imageTransport_: () => `http_: //lorempixel.com/${width}/${height}/transport`,
    imageUrl_:       () => faker.image.imageUrl(),
    dataUri_:        () => faker.image.dataUri()
  };
}
