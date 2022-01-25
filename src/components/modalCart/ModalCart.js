import { Component } from 'react';
import { Link } from 'react-router-dom';

import ModalCartItem from '../ModalCartItem/ModalCartItem';
import ProductContext from '../../utils/productContext';

import './ModalCart.css';
import Spinner from '../Spinner/Spinner';

export default class ModalCart extends Component {
	constructor() {
		super();

		this.state = {
			purchasedProd: [],
			totalPrice: 0,
			currencyIndex: 0,
			isLoading: true
		};
	}
	static contextType = ProductContext;

	async componentDidMount() {
		const context = await this.context;

		this.setState({ purchasedProd: context, isLoading: false });

		if (Object.keys(this.state.purchasedProd.product).length !== 0) {
			let sum = [];

			this.state.purchasedProd.product.map(element =>
				sum.push(element.prices[this.state.currencyIndex].amount * element.qty)
			);

			let total = sum.reduce(function (previousValue, currentValue) {
				return previousValue + currentValue;
			});

			this.setState({
				totalPrice: total.toFixed(2)
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const context = this.context;

		if (
			prevState.purchasedProd.product !== context.product ||
			prevState.currencyIndex !== this.context.currencyIndex
		) {
			if (context.product && context.product.length > 0) {
				let sum = [];

				context.product.map(element =>
					sum.push(element.prices[this.state.currencyIndex].amount * element.qty)
				);

				let total = sum.reduce(function (previousValue, currentValue) {
					return previousValue + currentValue;
				});

				this.setState(
					{
						purchasedProd: context,
						totalPrice: total.toFixed(2),
						currencyIndex: this.context.currencyIndex,
						isLoading: false
					},
					() => {
						let qtyBadge = [];

						context.product.map(element => qtyBadge.push(element.qty));
						let totalQty = qtyBadge.reduce(function (previousValue, currentValue) {
							return previousValue + currentValue;
						});

						this.props.qtyProp(totalQty);
					}
				);
			} else {
				this.setState(
					{
						purchasedProd: context,
						totalPrice: 0,
						currencyIndex: this.context.currencyIndex,
						isLoading: false
					},
					() => {
						this.props.qtyProp(this.state.purchasedProd.product.length);
					}
				);
			}
		}
	}

	deleteProduct = id => {
		const { deleteProductContext } = this.context;
		const filteredProd = { ...this.state.purchasedProd };
		filteredProd.product = filteredProd.product.filter(element => element.prodId !== id);
		this.setState({ purchasedProd: filteredProd });
		deleteProductContext(filteredProd);
	};

	itemsMapped = () => {
		if (this.state.purchasedProd.product.length === 0) {
			return (
				<div className="modalMessage">
					<p> There is no items in your cart</p>
				</div>
			);
		} else {
			return this.state.purchasedProd.product.map(element => (
				<ModalCartItem
					key={element.prodId}
					prodProps={element}
					delete={this.deleteProduct}
				/>
			));
		}
	};

	priceHandler = () => {
		return (
			<>
				{this.state.purchasedProd.product.length
					? this.state.purchasedProd.product[0].prices[this.state.currencyIndex].currency
							.symbol
					: '$'}
				{this.state.totalPrice}
			</>
		);
	};

	render() {
		if (!this.props.show) {
			document.body.style.overflowY = 'scroll';
			return null;
		}

		if (this.props.show) {
			document.body.style.overflowY = 'hidden';
		}
		if (this.state.isLoading) return <Spinner />;

		return (
			<>
				<div className="modalOverlay" onClick={this.props.onShow}></div>
				<div className="modal">
					<div className="modalHeader" onClick={this.totalPrice}>
						<span>My Cart, </span>
						<span>{this.state.purchasedProd.product.length}</span> items
					</div>
					<div className="modalWrapper">{this.itemsMapped()}</div>
					<div className="totalPrice">
						<div>Total</div>
						<div>{this.priceHandler()}</div>
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
