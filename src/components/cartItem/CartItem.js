import { Component } from 'react';
import { ReactComponent as ArrLeft } from '../../assets/aLeft.svg';
import { ReactComponent as ArrRight } from '../../assets/aRight.svg';
import './cartItem.css';

export default class CartItem extends Component {
	render() {
		return (
			<>
				<hr />
				<div className="cartItemBox">
					<div className="cartItemDescription">
						<p className="itemName">Apollo</p>
						<p className="itemDescr">Running Short</p>
						<p className="itemPriceDigit">$50.00</p>
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
								src={require('../../assets/Product InsideCart.png')}
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
		);
	}
}
