import { Component } from 'react';
import { ReactComponent as ArrLeft } from '../../assets/aLeft.svg';
import { ReactComponent as ArrRight } from '../../assets/aRight.svg';
import changeQty from '../../utils/productQtyChanger';
import './cartItem.css';

export default class CartItem extends Component {
	constructor() {
		super();
		this.state = {
			qty: 1
		};
	}
	componentDidMount() {
		if (this.props.prodProps.qty.length !== 0) {
			this.setState({
				qty: this.props.prodProps.qty
			});
		}
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
						<hr />
						<div className="cartItemBox">
							<div className="cartItemDescription">
								<p className="cartItemName">{this.props.prodProps.brand}</p>
								<p className="cartItemDescr">{this.props.prodProps.name}</p>
								<p className="cartItemPriceDigit">
									{this.props.prodProps.prices[0].currency.symbol}
									{this.props.prodProps.prices[0].amount}
								</p>
								<div className="cartItemAttributes">
									{Object.keys(this.props.prodProps.attributes).length !== 0 &&
										this.props.prodProps.attributes && (
											<>
												{this.props.prodProps.attributes.map(attr => (
													<div key={Object.entries(attr)[0][0]}>
														<p className="cartItemAttributesName">
															{Object.entries(attr)[0][0]}:
														</p>

														<div
															className="cartAttributeBox"
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
								<div className="cartItemQuantity">
									<button onClick={this.increaseQty}>+</button>
									<p>{this.state.qty}</p>
									<button onClick={this.decreaseQty}>-</button>
								</div>
								<div className="cartItemImg">
									<img alt="product_image" src={this.props.prodProps.gallery[0]} />
									<div className="arrowLeft">
										<ArrLeft />
									</div>
									<div className="arrowRight">
										<ArrRight />
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}
