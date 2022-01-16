import { Component } from 'react';
import Header from '../components/header/Header';
import ItemCard from '../components/itemCard/ItemCard';
import MainText from '../components/mainText/MainText';

import './categoryPage.css';

export default class CategoryPage extends Component {
	render() {
		return (
			<>
				<Header />
				<MainText text={this.props.category} />
				<div className="categoryPageItems">
					{this.props.data.category.products.map(
						({ id, name, inStock, gallery, prices, attributes, brand }) => (
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
						)
					)}
				</div>
			</>
		);
	}
}
