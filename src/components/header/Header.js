import { Component } from 'react';
import { ReactComponent as ShopLogo } from '../../assets/a-logo.svg';
import ModalCart from '../modalCart/ModalCart';
import './Header.css';

export default class Header extends Component {
	state = {
		show: false
	};

	showModal = e => {
		this.setState(prevState => ({
			show: !prevState.show
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
					<img className="currencyIcon" alt="logo" src={require('../../assets/Group 1.png')} />
					<button
						onClick={e => {
							this.showModal();
						}}>
						<img className="cartIcon" alt="logo" src={require('../../assets/Empty Cart.png')} />
					</button>
				</div>
				<ModalCart show={this.state.show} />
			</div>
		);
	}
}
