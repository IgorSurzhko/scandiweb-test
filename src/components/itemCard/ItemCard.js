import { Component } from 'react';
import './itemCard.css';

export default class ItemCard extends Component {
	render() {
		return (
			<div className="cardBox">
				<img src={require('../../assets/product card example.png')} alt="" />
				<p className="itemName">Apollo Running Short</p>
				<p className="itemPrice">$50.00</p>
			</div>
		);
	}
}
