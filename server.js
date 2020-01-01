import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import mongoose from 'mongoose'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const PORT = process.env.PORT || 4000;

const startServer = async () => {
	const app = express()

	const server = new ApolloServer({ typeDefs, resolvers })
	server.applyMiddleware({ app })

	await mongoose.connect('mongodb://localhost:27017/recipes', { 
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	app.listen({ port: PORT }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}

startServer()