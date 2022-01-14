import React, { Component } from 'react';
import checkQuantity from './serializedLocal';

const ProductContext = React.createContext();
let retrievedObject = checkQuantity();
class ProductProvider extends Component {
	// Context state
	state = {
		product: retrievedObject
	};

	// Method to update state
	setProduct = newProduct => {
		if (Object.keys(this.state.product).length === 0) {
			this.setState({
				product: [newProduct]
			});
		} else {
			this.setState(prevState => ({
				product: [...prevState.product, newProduct]
			}));
		}
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
