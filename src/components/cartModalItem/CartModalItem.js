import { Component } from 'react';
import './cartModalItem.css';

export default class CartModalItem extends Component {
	render() {
		console.log('inside props', this.props.purchasedProd);
		return (
			<>
				{/* {Object.keys(this.props.purchasedProd).length !== 0 && ( */}
				<div className="cartModalBox">
					<div className="cartItemDescription">
						<p className="itemName">
							AAA
							{/* {this.props.purchasedProd.product.name} */}
						</p>
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
						</div>
					</div>
				</div>
			</>
		);
	}
}
