const faker = require('faker');

export default function systemMock ({
  locale
}: IMocksArgs): ISystem {
  if (locale) {
    faker.locale = locale;
  }
  
  return {
    id_:                     () => faker.random.uuid(),
    commonFileExtension_:     () => faker.system.commonFileExt(),
    commonFileName_:          () => faker.system.commonFileName(),
    commonFileType_:          () => faker.system.commonFileType(),
    directoryPath_:           () => faker.system.directoryPath(),
    fileExtension_:           () => faker.system.fileExt(),
    fileName_:                () => faker.system.fileName(),
    filePath_:                () => faker.system.filePath(),
    mimeType_:                () => faker.system.mimeType(),
    semver_:                  () => faker.system.semver(),
    uuid_:                    () => faker.random.uuid()
  };
}
