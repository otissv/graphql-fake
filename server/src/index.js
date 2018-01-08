import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import fake from '../../core/dist/fake-code'
import { parse } from 'graphql/language'

const PORT = 3000
const app = express()

app.use(
  graphqlExpress(request => {
    return {
      schema: makeExecutableSchema({
        typeDefs: [fake.schemaTypeDefinitions, fake.schemaQueries],
        resolvers: fake.mocks
      })
    }
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.listen(PORT)
