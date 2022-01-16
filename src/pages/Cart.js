import { Component } from 'react';
import CartItem from '../components/cartItem/CartItem';
import Header from '../components/header/Header';
import MainText from '../components/mainText/MainText';
import ProductContext from '../utils/productContext';
import './cart.css';

export default class Cart extends Component {
	constructor() {
		super();
		this.state = {
			purchasedProd: []
		};
	}
	static contextType = ProductContext;

	componentDidMount() {
		const context = this.context;
		this.setState({ purchasedProd: context }, () => {});
	}

	componentDidUpdate(prevProps, prevState) {
		const context = this.context;
		if (prevState.purchasedProd.product !== context.product) {
			this.setState({ purchasedProd: context });
		}
	}

	deleteProduct = id => {
		const { deleteProductContext } = this.context;
		const filteredProd = { ...this.state.purchasedProd };
		filteredProd.product = filteredProd.product.filter(element => element.prodId !== id);
		this.setState({ purchasedProd: filteredProd });
		deleteProductContext(filteredProd);
	};

	render() {
		return (
			<div>
				<Header />
				<MainText text="Cart" />
				{this.state.purchasedProd.product &&
					this.state.purchasedProd.product.map(element => (
						<CartItem key={element.prodId} prodProps={element} delete={this.deleteProduct} />
					))}
				{this.state.purchasedProd.product && Object.keys(this.state.purchasedProd.product).length === 0 && (
					<div className="cart">
						<p> There is no items in your cart</p>
					</div>
				)}
			</div>
		);
	}
}
