import { Component } from 'react';
import CartItem from '../components/cartItem/CartItem';
import Header from '../components/header/Header';
import MainText from '../components/mainText/MainText';
import ProductContext from '../utils/ProductContext';

export default class Cart extends Component {
	constructor() {
		super();
		this.state = {
			purchasedProd: {}
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
				<CartItem prodProps={this.state.purchasedProd} />
				<CartItem />
			</div>
		);
	}
}
