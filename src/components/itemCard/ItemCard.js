import { Component } from 'react';
import './itemCard.css';

export default class ItemCard extends Component {
	render() {
		return (
			<div className="cardBox">
				<img src={require('../../assets/product card example.png')} alt="card_image" />
				<button>
					<img
						className="cart"
						src={require('../../assets/white pan on a green background.png')}
						alt="cart"
					/>
				</button>

				<p className="itemName">Apollo Running Short</p>
				<p className="itemPrice">$50.00</p>
			</div>
		);
	}
}
