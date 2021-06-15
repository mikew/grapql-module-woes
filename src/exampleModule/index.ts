import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { createModule } from 'graphql-modules'

export const ExampleModule = createModule({
  id: 'ExampleModule',
  typeDefs: mergeTypeDefs(loadFilesSync(`${__dirname}/schema`), {
    useSchemaDefinition: false,
  }),
})
