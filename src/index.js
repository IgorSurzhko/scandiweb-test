import React from 'react';
import ReactDOM from 'react-dom';

import { client } from './utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import App from './App';
import './index.css';

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);
