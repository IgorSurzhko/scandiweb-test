import { Component } from 'react';
import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import { ReactComponent as CartIcon } from '../../assets/cartIcon.svg';
import { ReactComponent as ArrowCurrencyUp } from '../../assets/arrowCurrencyUp.svg';
import { ReactComponent as ArrowCurrencyDown } from '../../assets/arrowCurrencyDown.svg';

import CurrencyModal from '../currencyModal/CurrencyModal';
import ModalCart from '../modalCart/ModalCart';
import './header.css';

import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	state = {
		showModalCart: false,
		showModalCurrency: false,
		cartQty: 0,
		symbol: '$'
	};

	showModal = () => {
		this.setState(prevState => ({
			showModalCart: !prevState.showModalCart
		}));
	};

	showCurrency = () => {
		this.setState(prevState => ({
			showModalCurrency: !prevState.showModalCurrency
		}));
	};

	onPurchaseQty = qty => {
		this.setState({ cartQty: qty });
	};

	onCurrSymbol = symbol => {
		this.setState({ symbol: symbol.substring(0, 2) });
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
					<button className="currencyIcon" onClick={this.showCurrency}>
						{this.state.symbol}
						{this.state.showModalCurrency ? <ArrowCurrencyUp /> : <ArrowCurrencyDown />}
					</button>

					<button onClick={this.showModal}>
						{this.state.cartQty > 0 && <div className="headerCartQty">{this.state.cartQty}</div>}
						<CartIcon />
					</button>
				</div>
				<CurrencyModal
					currency={this.state.showModalCurrency}
					onShow={this.showCurrency}
					clickHandler={this.onCurrSymbol}
				/>
				<ModalCart show={this.state.showModalCart} onShow={this.showModal} qtyProp={this.onPurchaseQty} />
			</div>
		);
	}
}
