export default `
  # message takes an optional length parameter as an argument. If length is defined 1 item is returned
  Message_ (locale: String) : Message_
  MessageList_ (length: Int!, locale: String): [Message_]
`;

