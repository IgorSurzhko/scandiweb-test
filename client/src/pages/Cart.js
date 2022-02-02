import { Component } from 'react';

import CartItem from '../components/CartItem/CartItem';
import Header from '../components/Header/Header';
import MainText from '../components/MainText/MainText';
import Spinner from '../components/Spinner/Spinner';
import ProductContext from '../utils/productContext';

import './Cart.css';

export default class Cart extends Component {
	constructor() {
		super();

		this.state = {
			purchasedProd: [],
			isLoading: true
		};
	}
	static contextType = ProductContext;

	componentDidMount() {
		const context = this.context;

		this.setState({ purchasedProd: context, isLoading: false });
	}

	componentDidUpdate(prevProps, prevState) {
		const context = this.context;

		if (prevState.purchasedProd.product !== context.product) {
			this.setState({ purchasedProd: context, isLoading: false });
		}
	}

	deleteProduct = id => {
		const { deleteProductContext } = this.context;
		const filteredProd = { ...this.state.purchasedProd };
		filteredProd.product = filteredProd.product.filter(element => element.prodId !== id);
		this.setState({ purchasedProd: filteredProd });

		deleteProductContext(filteredProd);
	};

	itemsMapped = () => {
		if (this.state.isLoading) return <Spinner />;

		if (Object.keys(this.state.purchasedProd.product).length === 0) {
			return (
				<div className="cart">
					<p> There is no items in your cart</p>
				</div>
			);
		} else {
			return (
				<>
					{this.state.purchasedProd.product.map(element => (
						<CartItem
							key={element.prodId}
							prodProps={element}
							delete={this.deleteProduct}
						/>
					))}
				</>
			);
		}
	};

	render() {
		return (
			<div>
				<Header />
				<MainText text="Cart" />
				{this.itemsMapped()}
			</div>
		);
	}
}
