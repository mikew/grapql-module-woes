import { ApolloServer } from 'apollo-server'
import { application } from './application'

const server = new ApolloServer({
  schema: application.createSchemaForApollo(),
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
