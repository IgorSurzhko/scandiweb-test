import { Component } from 'react';
import CartModalItem from '../cartModalItem/CartModalItem';
import ProductContext from '../../utils/ProductContext';
import './modalCart.css';
import { Link } from 'react-router-dom';

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
		this.setState({ purchasedProd: product });
	}

	render() {
		if (!this.props.show) {
			document.body.style.overflowY = 'scroll';
			return null;
		}
		if (this.props.show) {
			document.body.style.overflowY = 'hidden';
		}
		return (
			<>
				<div className="overlay"></div>
				<div className="modal">
					<div className="modalHeader">
						<span>My Cart,</span> <span>2</span> items
					</div>
					<CartModalItem prodProps={this.state.purchasedProd} />
					{/* TODO: MORE ITEMS COMPONENTS  */}
					<div className="totalPrice">
						<div>Total</div>
						<div>$100.00</div>
					</div>
					<div className="buttons">
						<Link to="/cart">
							<button>View Cart</button>
						</Link>

						<button> Check Out</button>
					</div>
				</div>
			</>
		);
	}
}
