import { client } from './apolloClient';
import { gql } from '@apollo/client';

export function currencyFetch() {
	return client.query({
		query: gql`
			query FetchCurrency {
				currencies {
					label
					symbol
				}
			}
		`
	});
}
