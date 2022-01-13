import React, { Component } from 'react';

const ProductContext = React.createContext();
let retrievedObject = localStorage.getItem('productLocalStor');

class ProductProvider extends Component {
	// Context state
	state = {
		product: JSON.parse(retrievedObject)
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
