const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!

  }
  
  input registerInput {
    username: String!
    email: String!
    password: String!
  }
  input loginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
  type Mutation {
    register(input: registerInput): Boolean
    login(input: loginInput): AuthPayload
  }
  type Query {
    users: [User]!
  }
`;
module.exports = typeDefs;