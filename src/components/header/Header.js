import { Component } from 'react';
import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import CurrencyModal from '../currencyModal/CurrencyModal';
import ModalCart from '../modalCart/ModalCart';
import './header.css';

import { NavLink } from 'react-router-dom';

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
					<NavLink to="/all">All</NavLink>
					<NavLink to="/clothes">Clothes</NavLink>
					<NavLink to="/tech">Tech</NavLink>
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
