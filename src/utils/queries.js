import { gql } from '@apollo/client';
import { client } from './apolloClient';

export const CATEGORY_QUERY = gql`
	query FetchCategory($title: String!) {
		category(input: { title: $title }) {
			products {
				id
				name
				inStock
				gallery
				prices {
					currency {
						label
					}
					amount
				}
			}
		}
	}
`;

export function productFetch(id) {
	client
		.query({
			query: gql`
				query GetRates {
					product(id: "${id}") {
						id
            name
            gallery
            description
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
                
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
		})
		.then(result => console.log(result));
}
