import { createApplication } from 'graphql-modules'
import { BaseTypes } from './baseTypes'
import { ExampleModule } from './exampleModule'

export const application = createApplication({
  modules: [BaseTypes, ExampleModule],
})
