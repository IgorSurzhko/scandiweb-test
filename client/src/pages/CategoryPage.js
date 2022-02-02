import { Component } from 'react';

import Header from '../components/Header/Header';
import ItemCard from '../components/ItemCard/ItemCard';
import MainText from '../components/MainText/MainText';
import Spinner from '../components/Spinner/Spinner';
import { categoryItemsFetch } from '../utils/categoryItemsFetch';

import './CategoryPage.css';

export default class CategoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showItems: 4,
			products: [],
			category: '',
			isLoading: true
		};
	}

	async componentDidMount() {
		let res = await categoryItemsFetch(this.props.catName);

		this.setState({
			products: res.data.category.products,
			category: this.props.catName,
			isLoading: false
		});
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.category !== this.props.catName) {
			let res = await categoryItemsFetch(this.props.catName);

			this.setState({
				products: res.data.category.products,
				category: this.props.catName,
				isLoading: false,
				showItems: 4
			});
		}
	}

	handleShowMore = () => {
		this.setState({
			showItems:
				this.state.showItems >= this.state.products.length
					? this.state.showItems
					: this.state.showItems + 2
		});
	};

	limitedItemsRender = () => {
		if (this.state.isLoading) return <Spinner />;

		return this.state.products
			.slice(0, this.state.showItems)
			.map(({ id, name, inStock, gallery, prices, attributes, brand }) => (
				<ItemCard
					key={id}
					id={id}
					name={name}
					inStock={inStock}
					gallery={gallery}
					prices={prices}
					attr={attributes}
					brand={brand}
				/>
			));
	};

	loadMoreHandler() {
		return (
			<div className="categoryPageLoadButton">
				{this.state.showItems < this.state.products.length && (
					<button className="btn" onClick={this.handleShowMore}>
						LOAD MORE
					</button>
				)}
			</div>
		);
	}

	render() {
		return (
			<>
				<Header />
				<MainText text={this.props.catName} />
				<div className="categoryPageItems">
					{this.limitedItemsRender()}
					{this.loadMoreHandler()}
				</div>
			</>
		);
	}
}
