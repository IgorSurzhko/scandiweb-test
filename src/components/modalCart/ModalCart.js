import { Component } from 'react';
import CartModalItem from '../cartModalItem/CartModalItem';
import ProductContext from '../../utils/ProductContext';
import './modalCart.css';

export default class ModalCart extends Component {
	constructor() {
		super();
		this.state = {
			purchasedProd: {}
		};
	}
	static contextType = ProductContext;

	async componentDidMount() {
		const product = await this.context;
		// console.log('modal prod', product.product[0].name);
		this.setState({ purchasedProd: product });
		// console.log('state', this.state.purchasedProd);
	}
	render() {
		if (!this.props.show) {
			document.body.style.overflow = 'scroll';
			return null;
		}
		if (this.props.show) {
			document.body.style.overflow = 'hidden';
		}
		return (
			<>
				<div className="overlay"></div>
				<div className="modal">
					<div>
						<span>My Bag,</span> <span>2</span> items
					</div>
					<CartModalItem purchasedProd={this.state.purchasedProd} />
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
