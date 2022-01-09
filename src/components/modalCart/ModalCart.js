import { Component } from 'react';
import CartModalItem from '../cartModalItem/CartModalItem';
import './modalCart.css';

export default class ModalCart extends Component {
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<>
				<div className="overlay"></div>
				<div className="modal">
					<div>
						<span>My Bag,</span> <span>2</span> items
					</div>
					<CartModalItem />
					<CartModalItem />
					<div className="totalPrice">
						<div>Total</div>
						<div>$100.00</div>
					</div>
					<div className="buttons">
						<button>View Bag</button>
						<button> Check Out</button>
					</div>
				</div>
			</>
		);
	}
}
