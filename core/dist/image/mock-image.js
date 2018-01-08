"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function imageMock(_a) {
    var _b = _a.height, height = _b === void 0 ? '480' : _b, locale = _a.locale, _c = _a.width, width = _c === void 0 ? '640' : _c;
    if (locale) {
        faker.locale = locale;
    }
    return {
        avatar_: function () { return faker.image.avatar(); },
        image_: function () { return faker.image.image(); },
        imageAbstract_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/abstract"; },
        imageAnimals_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/animal"; },
        imageBusiness_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/business"; },
        imageCats_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/cats"; },
        imageCity_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/city"; },
        imageFashion_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/fashion"; },
        imageFood_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/food"; },
        imageNature_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/nature"; },
        imageNightlife_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/nightlife"; },
        imagePeople_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/people"; },
        imageSports_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/sports"; },
        imageTechnics_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/technics"; },
        imageTransport_: function () { return "http_: //lorempixel.com/" + width + "/" + height + "/transport"; },
        imageUrl_: function () { return faker.image.imageUrl(); },
        dataUri_: function () { return faker.image.dataUri(); }
    };
}
exports.default = imageMock;
//# sourceMappingURL=mock-image.js.map