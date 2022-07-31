import { Database } from 'fakebase'

const db = new Database('./data/bgg')
const Games = db.table('game')
const Comments = db.table('comment')

export const resolvers = {
	Query: {
		greetings: () => 'hello, world'
	}
}
