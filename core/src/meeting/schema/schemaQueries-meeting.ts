export default `
  # meeting takes an optional length parameter as an argument. If length is defined 1 item is returned
  Meeting_ (locale: String) : Meeting_
  MeetingList_ (length: Int!, locale: String): [Meeting_]
`;

