import { Component } from 'react';
import CartItem from '../components/cartItem/CartItem';
import Header from '../components/header/Header';
import MainText from '../components/mainText/MainText';

export default class Cart extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainText text="CART" />
				<CartItem />
				<CartItem />
			</div>
		);
	}
}
