import { Component } from 'react';
import CartModalItem from '../cartModalItem/CartModalItem';
import ProductContext from '../../utils/productContext';
import './modalCart.css';
import { Link } from 'react-router-dom';

export default class ModalCart extends Component {
	constructor() {
		super();
		this.state = {
			purchasedProd: [],
			totalPrice: 0
		};
	}
	static contextType = ProductContext;

	async componentDidMount() {
		const product = await this.context;
		this.setState({ purchasedProd: product });

		if (Object.keys(this.state.purchasedProd.product).length !== 0) {
			let sum = [];
			this.state.purchasedProd.product.map(element => sum.push(element.prices[0].amount));
			let total = sum.reduce(function (previousValue, currentValue) {
				return previousValue + currentValue;
			});

			this.setState({
				totalPrice: total.toFixed(2)
			});
		}
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
				{this.state.purchasedProd.product && (
					<>
						<div className="overlay"></div>
						<div className="modal">
							<div className="modalHeader" onClick={this.totalPrice}>
								<span>My Cart,</span>{' '}
								<span>{Object.keys(this.state.purchasedProd.product).length}</span> items
							</div>
							<div className="modalWrapper">
								{this.state.purchasedProd.product.map(element => (
									<CartModalItem key={element.prodId} prodProps={element} />
								))}
								{Object.keys(this.state.purchasedProd.product).length === 0 && (
									<div className="modalMessage">
										<p> There is no items in your cart</p>
									</div>
								)}
							</div>
							<div className="totalPrice">
								<div>Total</div>
								<div>${this.state.totalPrice}</div>
							</div>
							<div className="buttons">
								<Link to="/cart">
									<button>View Cart</button>
								</Link>

								<button> Check Out</button>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}
