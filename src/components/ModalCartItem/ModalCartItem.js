import { Component } from 'react';
import changeQty from '../../utils/productQtyChanger';
import ProductContext from '../../utils/productContext';
import './ModalCartItem.css';

export default class ModalCartItem extends Component {
	constructor() {
		super();
		this.state = {
			qty: 1
		};
	}

	static contextType = ProductContext;

	componentDidMount() {
		const { qty } = this.context;
		const currentId = this.props.prodProps.prodId.toString();
		if (qty.find(element => element[currentId])) {
			const foundQty = qty.find(element => element[currentId]);
			this.setState({ qty: Object.values(foundQty).toString() });
		}
	}

	increaseQty = () => {
		this.setState(
			prevState => ({
				qty: prevState.qty + 1
			}),
			() => {
				changeQty(this.props.prodProps.prodId, this.state.qty, this.context);
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
					changeQty(this.props.prodProps.prodId, this.state.qty, this.context);
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
									<p>{this.state.qty}</p>
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
