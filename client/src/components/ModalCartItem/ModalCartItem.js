import { Component } from 'react';
import changeQty from '../../utils/productQtyChanger';
import ProductContext from '../../utils/productContext';
import deleteProductLocal from '../../utils/deleteProduct';
import './ModalCartItem.css';
import Spinner from '../Spinner/Spinner';

export default class ModalCartItem extends Component {
	constructor() {
		super();

		this.state = {
			qty: 1,
			currencyIndex: 0,
			isLoading: true
		};
	}

	static contextType = ProductContext;

	componentDidMount() {
		this.setState({
			qty: this.props.prodProps.qty,
			currencyIndex: this.context.currencyIndex,
			isLoading: false
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currencyIndex !== this.context.currencyIndex) {
			this.setState({ currencyIndex: this.context.currencyIndex, isLoading: false });
		}
	}
	increaseQty = () => {
		this.setState(
			prevState => ({
				qty: +prevState.qty + 1
			}),
			() => {
				changeQty(this.props.prodProps.prodId, this.state.qty, this.context);
			}
		);
	};

	decreaseQty = () => {
		this.setState(
			prevState => ({
				qty: +prevState.qty - 1
			}),
			() => {
				changeQty(this.props.prodProps.prodId, this.state.qty, this.context);

				if (this.state.qty === 0) {
					deleteProductLocal(this.props.prodProps.prodId);
					this.props.delete(this.props.prodProps.prodId);
				}
			}
		);
	};

	attributesLogic = () => {
		return (
			Object.keys(this.props.prodProps.attributes).length !== 0 &&
			this.props.prodProps.attributes && (
				<>
					{this.props.prodProps.attributes.map(attr => (
						<div key={Object.entries(attr)[0][0]}>
							<p className="cartModalItemAttrName">{Object.entries(attr)[0][0]}:</p>

							<div
								className="cartModalAttributeBox"
								style={{
									background: `${
										Object.entries(attr)[0][1].indexOf('#') !== -1 &&
										Object.entries(attr)[0][1]
									}`
								}}>
								{!(Object.entries(attr)[0][1].indexOf('#') !== -1) &&
									Object.entries(attr)[0][1]}
							</div>
						</div>
					))}
				</>
			)
		);
	};

	render() {
		if (this.state.isLoading) return <Spinner />;
		return (
			<div className="cartModalBox">
				<div className="cartModalItemDescription">
					<p className="cartModalItemName">{this.props.prodProps.brand}</p>
					<p className="cartModalItemDescr">{this.props.prodProps.name}</p>
					<p className="cartModalItemPriceDigit">
						{this.props.prodProps.prices[this.state.currencyIndex].currency.symbol}
						{this.props.prodProps.prices[this.state.currencyIndex].amount}
					</p>
					<div className="cartModalItemAttr">{this.attributesLogic()}</div>
				</div>
				<div className="cartItemRightSide">
					<div className="cartModalQuantity">
						<button onClick={this.increaseQty}>+</button>
						<p>{this.state.qty}</p>
						<button onClick={this.decreaseQty}>-</button>
					</div>
					<div className="cartModalProdImg">
						<img alt="product_image" src={this.props.prodProps.gallery[0]} />
					</div>
				</div>
			</div>
		);
	}
}
