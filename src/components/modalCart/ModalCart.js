import { Component } from 'react';
import CartModalItem from '../cartModalItem/CartModalItem';
import ProductContext from '../../utils/productContext';
import './modalCart.css';
import { Link } from 'react-router-dom';

export default class ModalCart extends Component {
	constructor() {
		super();
		this.state = {
			purchasedProd: ''
		};
	}
	static contextType = ProductContext;

	async componentDidMount() {
		const product = await this.context;
		this.setState({ purchasedProd: product });
	}

	totalPrice = () => {
		console.log(this.state.some);
	};

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
							<div className="modalHeader">
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
				)}
			</>
		);
	}
}
