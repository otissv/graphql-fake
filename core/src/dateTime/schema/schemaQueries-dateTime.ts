export default `
  # dateTime takes an optional length parameter as an argument. If length is defined 1 item is returned
  DateTime_ (
    locale: String,
    timeFormat: String,
    dataFormat: String,
  ): DateTime_
  DateTimeList_ (
    length: Int!, locale: String,
      timeFormat: String,
    dataFormat: String,
  ): [DateTime_]
`;

