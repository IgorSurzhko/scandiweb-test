import React, { Component } from 'react';
import checkQuantity from './serializedLocal';

const ProductContext = React.createContext();
let retrievedObject = checkQuantity();
console.log('context', retrievedObject);
class ProductProvider extends Component {
	// Context state
	state = {
		product: retrievedObject
	};

	// Method to update state
	setProduct = product => {
		this.setState(prevState => ({ product }));
	};

	render() {
		const { children } = this.props;
		const { product } = this.state;
		const { setProduct } = this;

		return (
			<ProductContext.Provider
				value={{
					product,
					setProduct
				}}>
				{children}
			</ProductContext.Provider>
		);
	}
}

export default ProductContext;

export { ProductProvider };
