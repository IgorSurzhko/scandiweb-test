import { Component } from 'react';
import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import CurrencyModal from '../currencyModal/CurrencyModal';
import ModalCart from '../modalCart/ModalCart';
import './Header.css';

export default class Header extends Component {
	state = {
		show: false,
		currency: false
	};

	showModal = e => {
		this.setState(prevState => ({
			show: !prevState.show,
			currency: prevState.currency
		}));
	};

	showCurrency = e => {
		this.setState(prevState => ({
			show: prevState.show,
			currency: !prevState.currency
		}));
	};

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
					<button
						onClick={e => {
							this.showCurrency();
						}}>
						<img className="currencyIcon" alt="logo" src={require('../../assets/Group 1.png')} />
					</button>

					<button
						onClick={e => {
							this.showModal();
						}}>
						<img className="cartIcon" alt="logo" src={require('../../assets/Empty Cart.png')} />
					</button>
				</div>
				<CurrencyModal currency={this.state.currency} />
				<ModalCart show={this.state.show} />
			</div>
		);
	}
}
