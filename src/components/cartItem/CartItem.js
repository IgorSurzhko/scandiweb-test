import { Component } from 'react';
import { ReactComponent as ArrLeft } from '../../assets/aLeft.svg';
import { ReactComponent as ArrRight } from '../../assets/aRight.svg';
import './cartItem.css';

export default class CartItem extends Component {
	render() {
		return (
			<>
				{this.props.prodProps && this.props.prodProps.product && (
					<>
						<hr />
						<div className="cartItemBox">
							<div className="cartItemDescription">
								<p className="cartItemName">{this.props.prodProps.product.brand}</p>
								<p className="cartItemDescr">{this.props.prodProps.product.name}</p>
								<p className="cartItemPriceDigit">
									{this.props.prodProps.product.prices[0].currency.symbol}
									{this.props.prodProps.product.prices[0].amount}
								</p>
								<div className="cartItemAttributes">
									{Object.keys(this.props.prodProps.product.attributes).length !== 0 &&
										this.props.prodProps.product.attributes && (
											<>
												{this.props.prodProps.product.attributes.map(attr => (
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
									<button>+</button>
									<p>1</p>
									<button>-</button>
								</div>
								<div className="cartItemImg">
									<img alt="product_image" src={this.props.prodProps.product.gallery[0]} />
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
