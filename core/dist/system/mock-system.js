"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
function systemMock(_a) {
    var locale = _a.locale;
    if (locale) {
        faker.locale = locale;
    }
    return {
        id_: function () { return faker.random.uuid(); },
        commonFileExtension_: function () { return faker.system.commonFileExt(); },
        commonFileName_: function () { return faker.system.commonFileName(); },
        commonFileType_: function () { return faker.system.commonFileType(); },
        directoryPath_: function () { return faker.system.directoryPath(); },
        fileExtension_: function () { return faker.system.fileExt(); },
        fileName_: function () { return faker.system.fileName(); },
        filePath_: function () { return faker.system.filePath(); },
        mimeType_: function () { return faker.system.mimeType(); },
        semver_: function () { return faker.system.semver(); },
        uuid_: function () { return faker.random.uuid(); }
    };
}
exports.default = systemMock;
//# sourceMappingURL=mock-system.js.map