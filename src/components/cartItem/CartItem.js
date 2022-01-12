import { Component } from 'react';
import { ReactComponent as ArrLeft } from '../../assets/aLeft.svg';
import { ReactComponent as ArrRight } from '../../assets/aRight.svg';
import './cartItem.css';

export default class CartItem extends Component {
	render() {
		console.log('in cart!', this.props.prodProps && this.props.prodProps.product && this.props.prodProps);
		return (
			<>
				{this.props.prodProps && this.props.prodProps.product && (
					<>
						<hr />
						<div className="cartItemBox">
							<div className="cartItemDescription">
								<p className="itemName">{this.props.prodProps.product.brand}</p>
								<p className="itemDescr">{this.props.prodProps.product.name}</p>
								<p className="itemPriceDigit">
									{this.props.prodProps.product.prices[0].currency.symbol}
									{this.props.prodProps.product.prices[0].amount}
								</p>
								<div className="sizeSelection">
									<div>XS</div>
									<div>S</div>
									<div>M</div>
									<div>L</div>
								</div>
							</div>
							<div className="cartItemRightSide">
								<div className="quantity">
									<button>+</button>
									<p>1</p>
									<button>-</button>
								</div>
								<div className="prodImg">
									<img
										className="productImage"
										alt="product_image"
										src={this.props.prodProps.product.gallery[0]}
									/>
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
