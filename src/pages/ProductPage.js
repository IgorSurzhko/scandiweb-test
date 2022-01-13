import { Component } from 'react';
import Header from '../components/header/Header';
import { productFetch } from '../utils/queries';
import ProductContext from '../utils/ProductContext';
import './productPage.css';
import { Link } from 'react-router-dom';

export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: true,
			product: {},
			bigImgSrc: '',
			prodAttr: [{}]
		};
	}
	static contextType = ProductContext;

	async componentDidMount() {
		const id = window.location.pathname.split('/')[2];
		let res = await productFetch(id);
		this.setState({ product: res.data.product, isLoaded: false, bigImgSrc: res.data.product.gallery[0] });
	}

	createMarkup() {
		return { __html: `${this.state.product.description}` };
	}

	attrCheck = e => {
		this.setState(prevState => ({
			prodAttr: [...prevState.prodAttr, { [e.target.name]: e.target.value }]
		}));
	};

	submitHandler = () => {
		const { product, setProduct } = this.context;
		const { name, gallery, brand, prices } = this.state.product;

		const prodAttrFiltered = this.state.prodAttr.filter(element => {
			if (Object.keys(element).length !== 0) {
				return true;
			}
			return false;
		});

		const newProduct = { name, gallery, brand, prices, attributes: prodAttrFiltered };
		setProduct(newProduct);
	};

	bigImgChanger = e => {
		this.setState({ bigImgSrc: e.target.src });
	};

	render() {
		return (
			<>
				<Header />
				{!this.state.isLoaded && (
					<div className="productBox">
						<div className="miniPicBox">
							{this.state.product.gallery.map(gallery => (
								<img onClick={this.bigImgChanger} key={gallery} src={gallery} alt="prod pic" />
							))}
						</div>
						<div className="bigPicBox">{<img src={this.state.bigImgSrc} alt="prod main pic" />}</div>
						<div className="itemAttr">
							<p className="itemName">{this.state.product.brand}</p>
							<p className="itemDescr">{this.state.product.name}</p>

							{Object.keys(this.state.product.attributes).length !== 0 && (
								<>
									{this.state.product.attributes.map(attr => (
										<div key={attr.name}>
											<p className="itemSize">{attr.name}:</p>
											<div className="attrSelection">
												{attr.items.map(item => (
													<div className="wrapper" key={item.value}>
														<input
															onClick={this.attrCheck}
															type="radio"
															name={attr.name}
															id={attr.name + item.value}
															value={item.value}></input>
														<label
															htmlFor={attr.name + item.value}
															id={item.value}
															style={{
																background: `${
																	item.value.indexOf('#') !== -1 && item.value
																}`
															}}>
															{!(item.value.indexOf('#') !== -1) && item.value}
														</label>
													</div>
												))}
											</div>
										</div>
									))}
								</>
							)}

							<p className="itemPrice">Price:</p>
							<p className="itemPriceDigit">
								{this.state.product.prices[0].currency.symbol}
								{this.state.product.prices[0].amount}
							</p>

							<Link to="/cart" onClick={this.submitHandler}>
								<button> add to cart</button>
							</Link>

							{/* <button onClick={this.submitHandler}> add to cart</button> */}

							<div className="itemDescrText" dangerouslySetInnerHTML={this.createMarkup()} />
						</div>
					</div>
				)}
			</>
		);
	}
}
