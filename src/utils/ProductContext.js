import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	// Context state
	state = {
		product: {}
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
