import { gql } from '@apollo/client';

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
