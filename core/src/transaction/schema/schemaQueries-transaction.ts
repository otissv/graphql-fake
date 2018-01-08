export default `
  # transaction takes an optional length parameter as an argument. If length is defined 1 item is returned
  Transaction_ (
    locale: String,
    cardVendor: String
  ): Transaction_
  TransactionList_ (
    length: Int!,
    locale: String
    cardVendor: String
  ): [Transaction_]
`;

