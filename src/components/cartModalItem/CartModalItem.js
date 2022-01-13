import { Component } from 'react';
import './cartModalItem.css';

export default class CartModalItem extends Component {
	render() {
		return (
			<>
				{this.props.prodProps && this.props.prodProps.product && (
					<>
						<div className="cartModalBox">
							<div className="cartItemDescription">
								<p className="cartModalItemName">{this.props.prodProps.product.brand}</p>
								<p className="cartModalItemDescr">{this.props.prodProps.product.name}</p>
								<p className="cartModalItemPriceDigit">
									{this.props.prodProps.product.prices[0].currency.symbol}
									{this.props.prodProps.product.prices[0].amount}
								</p>
								<div className="cartModalItemAttr">
									{Object.keys(this.props.prodProps.product.attributes).length !== 0 &&
										this.props.prodProps.product.attributes && (
											<>
												{this.props.prodProps.product.attributes.map(attr => (
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
									<p>1</p>
									<button>-</button>
								</div>
								<div className="cartModalProdImg">
									<img alt="product_image" src={this.props.prodProps.product.gallery[0]} />
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}
