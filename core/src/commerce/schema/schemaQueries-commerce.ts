export default `
  # commerce takes an optional length parameter as an argument. If length is defined 1 item is returned
  Commerce_ (locale: String): Commerce_
  CommerceList_ (length: Int!, locale: String): [Commerce_]
`;

