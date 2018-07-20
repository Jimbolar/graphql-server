import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Mocks from '../../test/mocks';
import Resolvers from '../resolvers';
import RootQuery from './root.graphql';

const logger = { log: err => console.log(err) };

const FortniteSchema = `
type Query {
  getFortniteStats: String
}
`;

const SchemaDefinition = `
schema {
  query: RootQueryType
}`;

const Schema = [
  // RootQuery,
  // SchemaDefinition,
  FortniteSchema,
];

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: true,
  logger,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: Mocks,
  preserveResolvers: true,
});


export default executableSchema;
