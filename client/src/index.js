import React from 'react';
import ReactDOM from 'react-dom';

import { client } from './utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ProductProvider } from './utils/productContext';

import App from './App';
import './index.css';

ReactDOM.render(
	<ApolloProvider client={client}>
		<ProductProvider>
			<React.StrictMode>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</React.StrictMode>
		</ProductProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
