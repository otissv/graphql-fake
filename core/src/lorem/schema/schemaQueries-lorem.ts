export default `
  # lorem takes an optional length parameter as an argument. If length is defined 1 item is returned
  Lorem_ (
    locale: String,
    sentences: Int,
    words: Int,
    arrayOfWords: Int
    ): Lorem_
  LoremList_ (
    length: Int!, 
    locale: String,
    sentences: Int,
    words: Int,
    arrayOfWords: Int
    ): [Lorem_]
`;

