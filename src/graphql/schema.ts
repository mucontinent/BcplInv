import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: Int
    username: String
    email: String
    password: String
    roles: [String]
  }

  type Query {
    users(search: String): [User]!
  }
`;
