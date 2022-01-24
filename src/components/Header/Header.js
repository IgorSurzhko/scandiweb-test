import { Component } from 'react';

import { currencyFetch } from '../../utils/currencyFetch';
import ProductContext from '../../utils/productContext';

import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import { ReactComponent as CartIcon } from '../../assets/cartIcon.svg';
import { ReactComponent as ArrowCurrencyUp } from '../../assets/arrowCurrencyUp.svg';
import { ReactComponent as ArrowCurrencyDown } from '../../assets/arrowCurrencyDown.svg';

import CurrencyModal from '../CurrencyModal/CurrencyModal';
import ModalCart from '../ModalCart/ModalCart';
import './Header.css';

import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	state = {
		showModalCart: false,
		showModalCurrency: false,
		cartQty: 0,
		curr: [],
		currencyIndex: 0
	};

	static contextType = ProductContext;

	async componentDidMount() {
		let res = await currencyFetch();

		this.setState({
			curr: res.data.currencies,
			currencyIndex: this.context.currencyIndex
		});
	}

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

	onCurrSymbol = idx => {
		this.setState({ currencyIndex: idx });
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
						{this.state.curr.length > 0 &&
							this.state.curr[this.state.currencyIndex].symbol}
						{this.state.showModalCurrency ? <ArrowCurrencyUp /> : <ArrowCurrencyDown />}
					</button>

					<button onClick={this.showModal}>
						{this.state.cartQty > 0 && (
							<div className="headerCartQty">{this.state.cartQty}</div>
						)}

						<CartIcon />
					</button>
				</div>
				<CurrencyModal
					curr={this.state.curr}
					currency={this.state.showModalCurrency}
					onShow={this.showCurrency}
					clickHandler={this.onCurrSymbol}
				/>
				<ModalCart
					show={this.state.showModalCart}
					onShow={this.showModal}
					qtyProp={this.onPurchaseQty}
				/>
			</div>
		);
	}
}
