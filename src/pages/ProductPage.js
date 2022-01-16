import { Component } from 'react';
import Header from '../components/header/Header';
import { productFetch } from '../utils/productFetch';
import ProductContext from '../utils/productContext';
import './productPage.css';
// import { Link } from 'react-router-dom';
// import ModalInformation from '../components/modalInformation/ModalInformation';
import productSubmitter from '../utils/productSubmitter';
import { Link } from 'react-router-dom';

export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
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
		productSubmitter(this.state, this.context);
	};

	bigImgChanger = e => {
		this.setState({ bigImgSrc: e.target.src });
	};

	// showModal = () => {
	// 	this.setState({
	// 		modalShow: true
	// 	});
	// 	this.submitHandler();
	// };

	// hideModal = () => {
	// 	this.setState({
	// 		modalShow: false
	// 	});
	// };

	render() {
		return (
			<>
				<Header />
				{!this.state.isLoaded && (
					<div className="productBox">
						<div className="productBoxMiniPic">
							{this.state.product.gallery.map(gallery => (
								<img onClick={this.bigImgChanger} key={gallery} src={gallery} alt="prod pic" />
							))}
						</div>
						<div className="productBoxBigPic">{<img src={this.state.bigImgSrc} alt="prod main pic" />}</div>
						<div className="productBoxItemAttr">
							<p className="productBoxItemName">{this.state.product.brand}</p>
							<p className="productBoxItemDescr">{this.state.product.name}</p>

							{Object.keys(this.state.product.attributes).length !== 0 && (
								<>
									{this.state.product.attributes.map(attr => (
										<div key={attr.name}>
											<p className="productBoxItemAttrName">{attr.name}:</p>
											<div className="productBoxAttrSelection">
												{attr.items.map(item => (
													<div className="productBoxWrapper" key={item.value}>
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

							<p className="productBoxItemPrice">Price:</p>
							<p className="productBoxItemPriceDigit">
								{this.state.product.prices[0].currency.symbol}
								{this.state.product.prices[0].amount}
							</p>

							<Link to="/cart" onClick={this.submitHandler}>
								<button
								// onClick={this.showModal}
								>
									add to cart
								</button>
							</Link>

							{/* <button onClick={this.showModal}> add to cart</button> */}

							<div className="productBoxItemDescrText" dangerouslySetInnerHTML={this.createMarkup()} />
						</div>
					</div>
				)}
				{/* <ModalInformation show={this.state.modalShow} changeShow={this.hideModal} /> */}
			</>
		);
	}
}
