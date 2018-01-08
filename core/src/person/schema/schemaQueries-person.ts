export default `
  # person takes an optional length parameter as an argument. If length is defined 1 item is returned
  Person_ (length: Int): Person_
  PersonList_ (length: Int!, locale: String) : [Person_]
`;

