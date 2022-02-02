import React, { Component } from 'react';
import { serializedLocal } from './serializedLocal';

const ProductContext = React.createContext();
let retrievedObject = serializedLocal();

class ProductProvider extends Component {
	state = {
		product: retrievedObject,
		currencyIndex: 0
	};

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

	setQty = qtyChangedObj => {
		const mappedProd = { ...this.state };

		mappedProd.product = this.state.product.map(element => {
			if (element.prodId === qtyChangedObj.prodId) {
				return { ...element, qty: qtyChangedObj.qty };
			}
			return element;
		});

		this.setState({ product: mappedProd.product });
	};

	deleteProductContext = filteredProd => {
		this.setState({ product: filteredProd.product });
	};

	setCurrencyIndex = idx => {
		this.setState({ currencyIndex: idx });
	};

	render() {
		const { children } = this.props;
		const { product } = this.state;
		const { currencyIndex } = this.state;

		const { setProduct } = this;
		const { setQty } = this;
		const { deleteProductContext } = this;
		const { setCurrencyIndex } = this;

		return (
			<ProductContext.Provider
				value={{
					product,
					currencyIndex,
					setProduct,
					setQty,
					deleteProductContext,
					setCurrencyIndex
				}}>
				{children}
			</ProductContext.Provider>
		);
	}
}

export default ProductContext;

export { ProductProvider };
