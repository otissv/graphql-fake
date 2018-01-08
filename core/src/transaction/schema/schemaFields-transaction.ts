import currency from './../../currency/schema/schemaFields-currency';

export default `
  ${currency}

  #=> "288.00"
  amount_: Int

  #=> "2012-02-01T23:00:00.000Z"
  date_: String

  #=> "Rutherford Prohaska and Kuhic"
  company_: String

  #=> "Home Loan Account 2415"
  name_: String

  #=> "withdrawal"
  type_: String

  #=> "75880972"
  account_: String
`;