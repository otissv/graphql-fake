import * as casual from 'casual';

export default function colorMock ({
  locale
}: IMocksArgs): IColorMock {
  
  return {
    colorName_:     () => casual.color_name,
    safeColorName_: () => casual.safe_color_name,
    rgbHex_:        () => casual.rgb_hex,
    rgbArray_:      () => casual.rgb_array
  };
}
