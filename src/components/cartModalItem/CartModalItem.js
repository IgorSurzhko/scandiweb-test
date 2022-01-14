import { Component } from 'react';
import './cartModalItem.css';

export default class CartModalItem extends Component {
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
									<button>+</button>
									<p>{this.props.prodProps.qty}</p>
									<button>-</button>
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
