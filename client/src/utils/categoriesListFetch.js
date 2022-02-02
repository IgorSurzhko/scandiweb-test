import { gql } from '@apollo/client';
import { client } from './apolloClient';

export function categoriesListFetch() {
	return client.query({
		query: gql`
			query GetCategoriesList {
				categories {
					name
				}
			}
		`
	});
}
