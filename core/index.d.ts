interface IAddress {
  buildingNumber_: () => string,
  cityPrefix_:     () => string,
  citySuffix_:     () => string,
  city_:           () => string,
  countryCode_:    () => string,
  country_:        () => string,
  latitude_:       () => string,
  longitude_:      () => string,
  room_:           () => number,
  stateAbbr_:      () => string,
  state_:          () => string,
  streetAddress_:  () => string,
  streetName_:     () => string,
  streetPrefix_:   () => string,
  streetSuffix_:   () => string,
  zipCode_:        () => string
}

interface ICard {
  cardExp_:    () => string,
  cardNumber_: () => string,
  cardType_:   () => string
}

interface ICardTransaction {
  currencyCode_:   () => string,
  currencySymbol_: () => string,
  currencyName_:   () => string,
  cardType_:       () => string,
  cardNumber_:     () => string,
  cardExp_:        () => string,
  cardData_:       () => string,
}

interface IColorMock {
  colorName_:     () => string,
  rgbArray_:      () => Array<number>,
  rgbHex_:        () => string,
  safeColorName_: () => string
}

interface ICommerce {
  department_:       () => string,
  price_:            () => string,
  productAdjective_: () => string,
  productMaterial_:  () => string,
  productName_:      () => string,
  product_:          () => string
}

interface ICompany {
  bsAdjective_:           () => string,
  bsBuzz_:                () => string,
  bsNoun_:                () => string,
  bs_:                    () => string,
  catchPhraseAdjective_:  () => string,
  catchPhraseDescriptor_: () => string,
  catchPhraseNoun_:       () => string,
  catchPhrase_:           () => string,
  companyName_:           () => string,
  companySuffix_:         () => string,
  suffixes_:              () => string[]
}

interface ICurrency {
  currencyCode_:    () => string,
  currencyName_:    () => string,
  currencySymbol_:  () => string,
}


interface IDatabase {
  collation_: () => string,
  column_:    () => string,
  engine_:    () => string,
  type_:      () => string
}

interface IDateTime {
  allDay_:      () => boolean,
  amPm_:        () => string,
  between_:     () => string,
  century_:     () => string,
  date_:        () => string,
  dayOfMonth_:  () => number,
  dayOfWeek_:   () => number,
  dayOfYear_:   () => number,
  endDate_:     () => string,
  future_:      () => string,
  monthNumber_: () => number,
  month_:       () => string,
  past_:        () => string,
  recent_:      () => string,
  startDAte_:   () => string,
  time_:        () => string,
  timezone_:    () => string,
  unixTime_:    () => number,
  weekday_:     () => string,
  year_:        () => number
}

interface IFinance {
  accountName_:     () => string,
  account_:         () => number,
  amount_:          () => number,
  bic_:             () => string,
  bitcoinAddress_:  () => string,
  iban_:            () => string,
  mask_:            () => number,
  transactionType_: () => string
}

interface IHacker {
  hackerAbbreviation_: () => string,
  hackerAdjective_:    () => string,
  hackerIngverb_:      () => string,
  hackerNoun_:         () => string,
  hackerPhrase_:       () => string,
  hackerVerb_:         () => string
}

interface IImage {
  avatar_:         () => string,
  dataUri_:        () => string,
  imageAbstract_:  () => string,
  imageAnimals_:   () => string,
  imageBusiness_:  () => string,
  imageCats_:      () => string,
  imageCity_:      () => string,
  imageFashion_:   () => string,
  imageFood_:      () => string,
  imageNature_:    () => string,
  imageNightlife_: () => string,
  imagePeople_:    () => string,
  imageSports_:    () => string,
  imageTechnics_:  () => string,
  imageTransport_: () => string,
  imageUrl_:       () => string,
  image_:          () => string
}

interface IInternet {
  bc_:           () => string[],
  body_:         () => string,
  cc_:           () => string[],
  domainName_:   () => string,
  domainSuffix_: () => string,
  domainWord_:   () => string,
  exampleEmail_: () => string,
  ip_:           () => string,
  ipv6_:         () => string,
  mac_:          () => string,
  protocol_:     () => string,
  recipient_:    () => string[],
  sender_:       () => string[],
  subject_:      () => string,
  url_:          () => string,
  userAgent_:    () => string,
  website_:      () => string
}

interface ILorem {
  arrayOfWords_:     () => string[],
  description_:      () => string,
  letter_:           () => string,
  lines_:            () => string,
  paragraph_:        () => string,
  paragraphs_:       () => string,
  sentence_:         () => string,
  sentences_:        () => string,
  shortDescription_: () => string,
  slug_:             () => string,
  string_:           () => string,
  text_:             () => string,
  title_:            () => string,
  word_:             () => string,
  words_:            () => string
}

interface IMeeting {
  allDay_:      () => boolean,
  address_:     () => IAddress,
  invited_:     () => IUser[],
  description_: () => string,
  end_:         () => string,
  start_:       () => string,
  title_:       () => string,
}

interface IMessage {
  from_:    () =>string,
  to_:      () => string[],
  date_:    () => string,
  cc_:      () => string[],
  body_:    () => string,
  subject_: () => string,
}

interface IMeta {
  created_:   () => string,
  createdBy_: () => IUser,
  updated_:   () => string,
  updatedBy_: () => IUser
}

interface IMisc {
  alphaNumeric_: () => string,
  boolean_:      () => boolean,
  languageCode_: () => string,
  locale_:       () => string,
  randomize_:    () => string
}

interface INumbers {
  arrayOfDigits_:    () => number[],
  arrayOfDoubles_:   () => number[],
  arrayOfIntegers_:  () => number[],
  double_:           () => number,
  integer_:          () => number,
  randomBetween_:    () => number,
  random_:           () => number
}

interface IPerson {
  email_:         () => string,
  firstName_:     () => string,
  fullName_:      () => string,
  jobArea_:       () => string,
  jobDescriptor_: () => string,
  jobTitle_:      () => string,
  jobType_:       () => string,
  lastName_:      () => string,
  namePrefix_:    () => string,
  nameSuffix_:    () => string,
  name_:          () => string,
  password_:      () => string,
  username_:      () => string
}

interface IPhone {
  phoneFormats_:      () => string,
  phoneNumberFormat_: () => string,
  phoneNumber_:       () => string
}

interface ISystem {
  id_:                     () => string,
  commonFileExtension_:     () => string,
  commonFileName_:          () => string,
  commonFileType_:          () => string,
  directoryPath_:           () => string,
  fileExtension_:           () => string,
  fileName_:                () => string,
  filePath_:                () => string,
  mimeType_:                () => string,
  semver_:                  () => string,
  uuid_:                    () => string
}

interface IUser {
  id_:           () => string,
  avatar_:        () => string,
  email_:         () => string,
  firstName_:     () => string,
  fullName_:      () => string,
  jobArea_:       () => string,
  jobDescriptor_: () => string,
  jobTitle_:      () => string,
  jobType_:       () => string,
  lastName_:      () => string,
  name_:          () => string,
  namePrefix_:    () => string,
  nameSuffix_:    () => string,
  password_:      () => string,
  username_:      () => string,
  address_:       () => IAddress,
  company_: {
    id_:         () => string,
    companyName_: () => string,
  },
  phoneNumber_:   () => string,
  website_:       () => string,
  roles_:         () => string[]
}

interface ITransaction {
  account_:        () => string,
  amount_:         () => number,
  company_:        () => string,
  currencyCode_:   () => string,
  currencyName_:   () => string,
  currencySymbol_: () => string,
  date_:           () => string,
  id_:             () => string,
  name_:           () => string,
  type_:           () => string,
}

interface IMocksArgs {
  arrayOfDigits?:     number,
  arrayOfDoubles?:    number,
  arrayOfIntegers?:   number,
  arrayOfWords?:      number,
  cardVendor?:        string,
  customBoolean?:     boolean,
  customFloat?:       number,
  customID?:          string,
  customIn?:          number,
  customString?:      string,
  dataFormat?:        string,
  doubleFrom?:        number,
  doubleTo?:          number,
  height?:            string,
  integerFrom?:       number,
  integerTo?:         number,
  locale?:            string,
  length?:            number,
  parameters?:        string,
  randomFrom?:        number,
  randomTo?:          number,
  roles?:             string[],
  sentences?:         number,
  timeFormat?:        string,
  width?:             string,
  words?:             number,

  customInt?:         number,
  customIntList?:     number[],
  customFloatList?:   number[],
  customStringList?:  number[],
  customBooleanList?: number[],
  customIDList?:      number[]
}