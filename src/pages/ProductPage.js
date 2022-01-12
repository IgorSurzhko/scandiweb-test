import { Component } from 'react';
import Header from '../components/header/Header';
import { productFetch } from '../utils/queries';
import './productPage.css';

export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: true,
			product: {},
			bigImgSrc: ''
		};
	}

	async componentDidMount() {
		const id = window.location.pathname.split('/')[2];
		let res = await productFetch(id);
		this.setState({ product: res.data.product, isLoaded: false, bigImgSrc: res.data.product.gallery[0] });
		// console.log(this.state.product.gallery);
		// console.log(this.state.product);
	}

	createMarkup() {
		return { __html: `${this.state.product.description}` };
	}

	onClickHandler = e => {
		this.setState({
			bigImgSrc: e.target.src
		});
		console.log(this.state);
	};

	render() {
		return (
			<>
				<Header />
				{!this.state.isLoaded && (
					<div className="productBox">
						<div className="miniPicBox">
							{this.state.product.gallery.map(gallery => (
								<img onClick={this.onClickHandler} key={gallery} src={gallery} alt="prod pic" />
							))}
						</div>
						<div className="bigPicBox">{<img src={this.state.bigImgSrc} alt="prod main pic" />}</div>
						<div className="itemAttr">
							<p className="itemName">{this.state.product.brand}</p>
							<p className="itemDescr">{this.state.product.name}</p>

							{this.state.product.attributes[0] && (
								<>
									<p className="itemSize"> {this.state.product.attributes[0].name}:</p>
									<div className="sizeSelection">
										<div>XS</div>
										<div>S</div>
										<div>M</div>
										<div>L</div>
									</div>
								</>
							)}

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
