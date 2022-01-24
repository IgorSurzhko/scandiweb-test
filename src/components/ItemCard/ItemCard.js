import { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Link } from 'react-router-dom';

import ProductContext from '../../utils/productContext';
import productSubmitter from '../../utils/productSubmitter';

import './ItemCard.css';

export default class ItemCard extends Component {
	state = { currencyIndex: 0 };

	static contextType = ProductContext;

	componentDidMount() {
		this.setState({ currencyIndex: this.context.currencyIndex });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currencyIndex !== this.context.currencyIndex) {
			this.setState({ currencyIndex: this.context.currencyIndex });
		}
	}

	onClickPurchase = e => {
		e.preventDefault();

		let prodObject = {};

		prodObject.product = {
			name: this.props.name,
			gallery: this.props.gallery,
			brand: this.props.brand,
			prices: this.props.prices
		};

		prodObject.prodAttr = [];

		productSubmitter(prodObject, this.context);
	};

	render() {
		return (
			<Link
				to={this.props.id}
				id={this.props.id}
				className={this.props.inStock ? 'cardBox' : 'cardBox  itemCardNotActive'}>
				{!this.props.inStock && <div className="itemCardOverlay">OUT OF STOCK</div>}

				<img src={this.props.gallery[0]} alt="card_image" />

				<button onClick={this.props.attr.length === 0 ? this.onClickPurchase : undefined}>
					<img
						src={require('../../assets/white pan on a green background.png')}
						alt="cart"
					/>
				</button>

				<p className="itemName">{this.props.name}</p>
				<p className="itemPrice">
					{getSymbolFromCurrency(
						this.props.prices[this.state.currencyIndex].currency.label
					)}
					{this.props.prices[this.state.currencyIndex].amount}
				</p>
			</Link>
		);
	}
}
