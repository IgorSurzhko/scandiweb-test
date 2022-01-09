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
				<MainText />
				<div className="bodyItems">
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</div>
			</>
		);
	}
}
