import { Component } from 'react';
import Header from '../components/header/Header';
// import { productFetch } from '../utils/queries';
import './productPage.css';

export default class ProductPage extends Component {
	// state = {
	// 	product: {}
	// };
	// async componentDidMount() {
	// 	const id = window.location.pathname.split('/')[2];
	// 	let res = await productFetch(id);
	// 	// console.log(res.data.product);
	// 	this.setState({ product: res.data.product });
	// 	// console.log(this.state.product.gallery);
	// 	// console.log(this.state.product.gallery[0]);
	// }
	render() {
		return (
			<>
				<Header />
				<div className="productBox">
					<div className="miniPicBox">
						{/* {this.state.product.map(gallery => (
							<img src={gallery} alt="prod pic" />
						))} */}
						{/* <img src={this.state.product.gallery[0]} alt="prod pic" /> */}

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
