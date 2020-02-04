require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { resolvers } = require('./graphql')
const {typeDefs} = require('./graphql/schema')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
app.use('/', graphiqlExpress({ schema: typeDefs }))
const port = process.env.SERVER_PORT || 4000
app.listen(port, () => console.log(`App listening on port ${port}!`))