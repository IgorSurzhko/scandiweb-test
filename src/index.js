import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { client } from './utils/apolloClient';

import { ApolloProvider } from '@apollo/client';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

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
