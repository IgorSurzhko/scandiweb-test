import { gql } from '@apollo/client';
import { client } from './apolloClient';

export function productFetch(id) {
	return client.query({
		query: gql`
			query GetProductByID {
				product(id: "${id}") {
					id
					name
					inStock
					gallery
					description
					attributes {
						id
						name
						type
						items {
							value
							}
					}
					prices{
						currency{
							label
							symbol
						}
						amount
					}
					brand
				}
			}
		`
	});
}
