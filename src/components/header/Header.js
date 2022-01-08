import { Component } from 'react';
import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="container">
				<div className="categories">
					<p>WOMEN</p>
					<p>MEN</p>
					<p>KIDS</p>
				</div>

				<ShopLogo />

				<div className="cartAndCurrency">
					<img className="currencyIcon" alt="logo" src={require('../../assets/Group 1.png')} />
					<img className="cartIcon" alt="logo" src={require('../../assets/Empty Cart.png')} />
				</div>
			</div>
		);
	}
}
