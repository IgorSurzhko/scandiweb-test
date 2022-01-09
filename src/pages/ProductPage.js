import { Component } from 'react';
import Header from '../components/header/Header';
import './productPage.css';

export default class ProductPage extends Component {
	render() {
		return (
			<>
				<Header />
				<div className="productBox">
					<div className="miniPicBox">
						<img src={require('../assets/productMiniPic.png')} alt="prod pic" />
						<img src={require('../assets/productMiniPic.png')} alt="prod pic" />
						<img src={require('../assets/productMiniPic.png')} alt="prod pic" />
					</div>
					<div className="bigPicBox">
						<img src={require('../assets/productBigPic.png')} alt="prod main pic" />
					</div>
					<div className="itemAttr">
						<p className="itemName">Apollo</p>
						<p className="itemDescr">Running Shorts</p>
						<p className="itemSize">size:</p>
						<div className="sizeSelection">
							<div>XS</div>
							<div>S</div>
							<div>M</div>
							<div>L</div>
						</div>

						<p className="itemPrice">Price:</p>
						<p className="itemPriceDigit">$50.00</p>

						<button>add to cart</button>

						<p className="itemDescrText">
							Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic
							cocktail dresses and party dresses from all your favorite brands.
						</p>
					</div>
				</div>
			</>
		);
	}
}
