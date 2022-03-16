import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { createContext } from "./graphql/context";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
