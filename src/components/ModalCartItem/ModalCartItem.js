import { Component } from 'react';
import './ModalCartItem.css';
import changeQty from '../../utils/productQtyChanger';
import ProductContext from '../../utils/productContext';

export default class CartModalItem extends Component {
	constructor() {
		super();
		this.state = {
			qty: []
		};
	}

	static contextType = ProductContext;

	componentDidMount() {
		const { qty } = this.context;
		this.setState({ qty });
		console.log('in modal', qty);
	}

	increaseQty = () => {
		this.setState(
			prevState => ({
				qty: prevState.qty + 1
			}),
			() => {
				changeQty(this.props.prodProps.prodId, this.state.qty);
			}
		);
	};

	decreaseQty = () => {
		if (this.state.qty > 0) {
			this.setState(
				prevState => ({
					qty: prevState.qty - 1
				}),
				() => {
					changeQty(this.props.prodProps.prodId, this.state.qty);
				}
			);
		}
	};

	render() {
		return (
			<>
				{this.props.prodProps && (
					<>
						<div className="cartModalBox">
							<div className="cartModalItemDescription">
								<p className="cartModalItemName">{this.props.prodProps.brand}</p>
								<p className="cartModalItemDescr">{this.props.prodProps.name}</p>
								<p className="cartModalItemPriceDigit">
									{this.props.prodProps.prices[0].currency.symbol}
									{this.props.prodProps.prices[0].amount}
								</p>
								<div className="cartModalItemAttr">
									{Object.keys(this.props.prodProps.attributes).length !== 0 &&
										this.props.prodProps.attributes && (
											<>
												{this.props.prodProps.attributes.map(attr => (
													<div key={Object.entries(attr)[0][0]}>
														<p className="cartModalItemAttrName">
															{Object.entries(attr)[0][0]}:
														</p>

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
										)}
								</div>
							</div>
							<div className="cartItemRightSide">
								<div className="cartModalQuantity">
									<button onClick={this.increaseQty}>+</button>
									<p>
										{this.state.qty === 1
											? 1
											: this.state.qty.map(
													element => element[this.props.prodProps.prodId.toString()]
											  )}
									</p>
									<button onClick={this.decreaseQty}>-</button>
								</div>
								<div className="cartModalProdImg">
									<img alt="product_image" src={this.props.prodProps.gallery[0]} />
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}
