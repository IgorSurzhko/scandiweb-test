import { gql } from '@apollo/client';

export const CATEGORY_QUERY = gql`
	query FetchCategory($title: String!) {
		category(input: { title: $title }) {
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
`;
