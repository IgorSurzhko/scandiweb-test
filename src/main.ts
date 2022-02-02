const express = require('express');
const path = require('path');

import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';

async function startApolloServer(typeDefs: any, resolvers: any) {
	const server = new ApolloServer({ typeDefs, resolvers });
	const app = express();
	await server.start();
	server.applyMiddleware({ app, path: '/graphql' });

	app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
	app.get('*', (req: any, res: any) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	});
	const cors = require('cors');
	app.use(cors());
	app.use(function (req: any, res: any, next: any) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept'
		);
		next();
	});

	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
	});
}

startApolloServer(typeDefs, resolvers);
