'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlTools = require('graphql-tools');

var _fakeCode = require('../../core/dist/fake-code');

var _fakeCode2 = _interopRequireDefault(_fakeCode);

var _language = require('graphql/language');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;
var app = (0, _express2.default)();

app.use((0, _graphqlServerExpress.graphqlExpress)(function (request) {
  return {
    schema: (0, _graphqlTools.makeExecutableSchema)({
      typeDefs: [_fakeCode2.default.schemaTypeDefinitions, _fakeCode2.default.schemaQueries],
      resolvers: _fakeCode2.default.mocks
    })
  };
}));

app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

app.listen(PORT);