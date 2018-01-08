"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require("casual");
function colorMock(_a) {
    var locale = _a.locale;
    return {
        colorName_: function () { return casual.color_name; },
        safeColorName_: function () { return casual.safe_color_name; },
        rgbHex_: function () { return casual.rgb_hex; },
        rgbArray_: function () { return casual.rgb_array; }
    };
}
exports.default = colorMock;
//# sourceMappingURL=mock-color.js.map