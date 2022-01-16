import React, { Component } from 'react';
import { serializedLocal, serializedLocalQty } from './serializedLocal';

const ProductContext = React.createContext();
let retrievedObject = serializedLocal();
let qtyObj = serializedLocalQty();

class ProductProvider extends Component {
	state = {
		product: retrievedObject,
		qty: qtyObj
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

	setQty = qtyObj => {
		if (Object.keys(this.state.qty).length === 0) {
			this.setState({
				qty: [qtyObj]
			});
		} else if (this.state.qty.findIndex(obj => Object.keys(obj)[0] === Object.keys(qtyObj)[0]) !== -1) {
			this.setState(prevState => ({
				qty: [
					...prevState.qty.filter(element => {
						return Object.keys(element)[0] !== Object.keys(qtyObj)[0];
					}),
					qtyObj
				]
			}));
		} else {
			this.setState(prevState => ({
				qty: [...prevState.qty, qtyObj]
			}));
		}
	};

	deleteProductContext = filteredProd => {
		this.setState({ product: filteredProd.product });
	};

	render() {
		const { children } = this.props;
		const { product } = this.state;
		const { qty } = this.state;
		const { setProduct } = this;
		const { setQty } = this;
		const { deleteProductContext } = this;

		return (
			<ProductContext.Provider
				value={{
					product,
					qty,
					setProduct,
					setQty,
					deleteProductContext
				}}>
				{children}
			</ProductContext.Provider>
		);
	}
}

export default ProductContext;

export { ProductProvider };
