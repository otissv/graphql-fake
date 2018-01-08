export default `
  # cardTransaction takes an optional length parameter as an argument. If length is defined 1 item is returned
  CardTransaction_ (
    locale: String, 
    cardVendor: String
  ): CardTransaction_

  CardTransactionList_ (
    length: Int!, 
    locale: String,
    cardVendor: String
  ): [CardTransaction_]
`;

