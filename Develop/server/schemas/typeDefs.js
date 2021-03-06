
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
}
type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
input BookDetails {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
}
type Auth {
    token: ID!
    user: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookDetails!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;