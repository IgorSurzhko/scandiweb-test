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

export const PRODUCT_QUERY = gql`
	query FetchProduct($id: String!) {
		product(id: $id) {
            {
                id 
                name
               inStock
                  gallery
                  description
                  attributes {
                    id
                    name
                    type
                    items{
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
`;
