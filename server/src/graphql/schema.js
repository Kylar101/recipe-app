const { gql } = require('apollo-server-express');

const typedefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    user: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(title: String!): User!
    updateUser(id: ID!, name: String!, email: String!): User!
  }
`;


module.exports = typedefs;