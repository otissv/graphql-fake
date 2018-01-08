export default`
  # numbers takes an optional length parameter as an argument. If length is defined 1 item is returned
  Numbers_ (
    length: Int,
    integerFrom: Int, 
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    randomFrom: Int,
    randomTo: Int,
  ): Numbers_

  NumbersList_ (
    length: Int!, 
    locale: String,
    integerFrom: Int, 
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    randomFrom: Int,
    randomTo: Int,
  ): [Numbers_]
`;

