import { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Link } from 'react-router-dom';
import './itemCard.css';

export default class ItemCard extends Component {
	// onClickHandler = async e => {
	// 	// console.log(e.target.id);
	// 	productFetch(e.target.id);
	// };
	render() {
		return (
			<Link to={this.props.id} id={this.props.id} className="cardBox">
				<img src={this.props.gallery[0]} alt="card_image" />
				<button>
					<img
						className="cart"
						src={require('../../assets/white pan on a green background.png')}
						alt="cart"
					/>
				</button>

				<p className="itemName">{this.props.name}</p>
				<p className="itemPrice">
					{getSymbolFromCurrency(this.props.prices[0].currency.label)}
					{this.props.prices[0].amount}
				</p>
			</Link>
		);
	}
}
