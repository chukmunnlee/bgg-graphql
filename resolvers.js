import { Database } from 'fakebase'

const db = new Database('./data/bgg')
const Games = db.table('game')
const Comments = db.table('comment')

const getGames = (root, args) => {
	return []
}

const getGame = (root, args) => {
	return { }
}

const getComments = (root, args) => {
	return []
}
const getCommentsByGame = (root, args) => {
	return []
}
const getCommentsByUser = (root, args) => {
	return []
}

export const resolvers = {
	Query: {
		games: getGames,
		game: getGame,
		comments: getComments,
		commentsByGame: getCommentsByGame,
		commentsByUser: getCommentsByUser
	},

	Game: {
		comments: (game) => getCommentsByGame(game, { gid: game.id })
	},

	Comment: {
		game: (comment) => getGame(comment, { gameId: comment.id })
	}
}
