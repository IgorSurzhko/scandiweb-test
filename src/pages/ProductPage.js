import { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrUp } from '../assets/arrowUp.svg';
import { ReactComponent as ArrDown } from '../assets/arrowDown.svg';

import Header from '../components/Header/Header';

import { productFetch } from '../utils/productFetch';
import ProductContext from '../utils/productContext';
import productSubmitter from '../utils/productSubmitter';

import './ProductPage.css';

export default class ProductPage extends Component {
	constructor() {
		super();

		this.state = {
			modalShow: false,
			isLoaded: true,
			product: {},
			bigImgSrc: '',
			prodAttr: [],
			currencyIndex: 0,
			isAttrAllChecked: false,
			sliderImgIdx: 1
		};
	}

	static contextType = ProductContext;

	async componentDidMount() {
		//fetching product by ID using graphql query
		const id = window.location.pathname.split('/')[2];
		let res = await productFetch(id);

		this.setState({
			product: res.data.product,
			isLoaded: false,
			bigImgSrc: res.data.product.gallery[0],
			currencyIndex: this.context.currencyIndex
		});

		if (!this.state.product.attributes.length) {
			this.setState({ isAttrAllChecked: true });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currencyIndex !== this.context.currencyIndex) {
			this.setState({ currencyIndex: this.context.currencyIndex });
		}
	}

	createMarkup() {
		return { __html: `${this.state.product.description}` };
	}

	attrCheck = e => {
		this.setState(
			prevState => ({
				prodAttr: [
					...prevState.prodAttr.filter(elem => Object.keys(elem)[0] !== e.target.name),
					{ [e.target.name]: e.target.value }
				]
			}),
			() => {
				if (this.state.prodAttr.length === this.state.product.attributes.length) {
					this.setState({ isAttrAllChecked: true });
				}
			}
		);
	};

	submitHandler = () => {
		if (this.state.isAttrAllChecked) {
			productSubmitter(this.state, this.context);
		}
	};

	bigImgChanger = e => {
		this.setState({ bigImgSrc: e.target.src });
	};

	onArrowUp = () => {
		this.setState(prevState => ({
			sliderImgIdx: prevState.sliderImgIdx - 1
		}));

		if (this.state.sliderImgIdx === 0) {
			this.setState({ sliderImgIdx: this.state.product.gallery.length - 3 });
		}
	};

	onArrowDown = () => {
		if (this.state.product.gallery.length > 0)
			this.setState(prevState => ({
				sliderImgIdx: prevState.sliderImgIdx + 1
			}));

		if (this.state.sliderImgIdx === this.state.product.gallery.length - 3) {
			this.setState({ sliderImgIdx: 1 });
		}
	};

	render() {
		return (
			<>
				<Header />
				{!this.state.isLoaded && (
					<div className="productBox">
						<div className="productBoxMiniPic">
							<div className="productBoxArrowUp">
								{this.state.product.gallery.length > 1 && (
									<ArrUp onClick={this.onArrowUp} />
								)}
							</div>
							<div className="productBoxArrowDown">
								{this.state.product.gallery.length > 1 && (
									<ArrDown onClick={this.onArrowDown} />
								)}
							</div>

							{this.state.product.gallery
								.slice(0 + this.state.sliderImgIdx, 3 + this.state.sliderImgIdx)
								.map(gallery => (
									<img
										onClick={this.bigImgChanger}
										key={gallery}
										src={gallery}
										alt="prod pic"
									/>
								))}
						</div>
						<div className="productBoxBigPic">
							{<img src={this.state.bigImgSrc} alt="prod main pic" />}
						</div>
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
													<div
														className="productBoxWrapper"
														key={item.value}>
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
																	item.value.indexOf('#') !==
																		-1 && item.value
																}`
															}}>
															{!(item.value.indexOf('#') !== -1) &&
																item.value}
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
								{
									this.state.product.prices[this.state.currencyIndex].currency
										.symbol
								}
								{this.state.product.prices[this.state.currencyIndex].amount}
							</p>
							<Link to="/cart" onClick={this.submitHandler}>
								<button
									className="disabled"
									disabled={!this.state.isAttrAllChecked}>
									{!this.state.isAttrAllChecked
										? 'please select item options'
										: 'add to cart'}
								</button>
							</Link>
							<div
								className="productBoxItemDescrText"
								dangerouslySetInnerHTML={this.createMarkup()}
							/>
						</div>
					</div>
				)}
			</>
		);
	}
}
