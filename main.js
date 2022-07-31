import  express  from 'express'
import  morgan  from 'morgan'
import { ApolloServer } from 'apollo-server-express'

import { readFile } from 'fs/promises'
import { resolvers } from './resolvers.js'

const typeDefs = await readFile('schemas.graphql', 'utf8')
const apollo = new ApolloServer({ resolvers, typeDefs })

const PORT = 3000

const app = express();

app.use(morgan('dev'));

await apollo.start()
apollo.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
	console.info(`Application started at port ${PORT} on ${new Date()}`)
})

