import { Component } from 'react';
import Header from '../components/header/Header';
import ItemCard from '../components/itemCard/ItemCard';
import MainText from '../components/mainText/MainText';

import './categoryPage.css';

export default class CategoryPage extends Component {
	constructor() {
		super();
		this.state = {
			showItems: 4
		};
	}

	componentDidMount() {
		this.setState({ showItems: 4 });
	}
	handleShowMore = () => {
		this.setState({
			showItems:
				this.state.showItems >= this.props.data.category.products.length
					? this.state.showItems
					: this.state.showItems + 2
		});
	};

	render() {
		const items = this.props.data.category.products
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
		return (
			<>
				<Header />
				<MainText text={this.props.category} />
				<div className="categoryPageItems">
					{items}
					<div className="categoryPageLoadButton">
						{this.state.showItems < this.props.data.category.products.length && (
							<button className="btn" onClick={this.handleShowMore}>
								LOAD MORE
							</button>
						)}
					</div>
				</div>
			</>
		);
	}
}
