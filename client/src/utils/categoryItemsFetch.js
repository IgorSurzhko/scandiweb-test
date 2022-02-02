import { gql } from '@apollo/client';
import { client } from './apolloClient';

export function categoryItemsFetch(category) {
	return client.query({
		query: gql`
			query FetchCategory {
				category(input: { title: "${category}" }) {
					products {
						id
						brand
						name
						inStock
						gallery
						attributes {
							id
						}
						prices {
							currency {
								label
								symbol
							}
							amount
						}
					}
				}
			}
		`
	});
}
