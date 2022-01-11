import { Component } from 'react';
import Header from '../components/header/Header';
import { productFetch } from '../utils/queries';
import './productPage.css';

export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}

	async componentDidMount() {
		const id = window.location.pathname.split('/')[2];
		let res = await productFetch(id);
		this.setState({ product: res.data.product });
		// console.log(this.state.product.gallery);
		console.log(this.state.product);
	}

	createMarkup() {
		return { __html: `${this.state.product.description}` };
	}

	render() {
		return (
			<>
				<Header />
				{Object.keys(this.state.product).length !== 0 && (
					<div className="productBox">
						<div className="miniPicBox">
							{this.state.product.gallery.map(gallery => (
								<img key={gallery} src={gallery} alt="prod pic" />
							))}
						</div>
						<div className="bigPicBox">
							{<img src={this.state.product.gallery[0]} alt="prod main pic" />}
						</div>
						<div className="itemAttr">
							<p className="itemName">{this.state.product.brand}</p>
							<p className="itemDescr">{this.state.product.name}</p>
							<p className="itemSize">{this.state.product.attributes[0].name}:</p>
							<div className="sizeSelection">
								<div>XS</div>
								<div>S</div>
								<div>M</div>
								<div>L</div>
							</div>

							<p className="itemPrice">Price:</p>
							<p className="itemPriceDigit">
								{this.state.product.prices[0].currency.symbol}
								{this.state.product.prices[0].amount}
							</p>

							<button>add to cart</button>

							<div className="itemDescrText" dangerouslySetInnerHTML={this.createMarkup()} />
						</div>
					</div>
				)}
			</>
		);
	}
}
