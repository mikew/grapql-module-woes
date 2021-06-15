import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { createModule } from 'graphql-modules'

export const BaseTypes = createModule({
  id: 'BaseTypes',
  typeDefs: mergeTypeDefs(loadFilesSync(`${__dirname}/schema`), {
    useSchemaDefinition: false,
  }),
})
