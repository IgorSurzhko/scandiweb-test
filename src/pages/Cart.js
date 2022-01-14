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

	async componentDidMount() {
		const product = await this.context;
		this.setState({ purchasedProd: product });
	}

	render() {
		return (
			<div>
				<Header />
				<MainText text="Cart" />
				{this.state.purchasedProd.product &&
					this.state.purchasedProd.product.map(element => (
						<CartItem key={element.prodId} prodProps={element} />
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
