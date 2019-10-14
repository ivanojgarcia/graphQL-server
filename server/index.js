
import express from 'express';
// GrahQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();
const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app})

app.listen(4000, () => {
    console.log(`Start server http://localhost:4000${server.graphqlPath}`)
})


