import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

import { categoriesListFetch } from './utils/categoriesListFetch';

import './App.css';

function App() {
	const [categoriesList, setCategoriesList] = useState([{ name: 'all' }]);

	useEffect(() => {
		let fetchData = async () => {
			let resCategories = await categoriesListFetch();

			setCategoriesList(resCategories.data.categories);
		};

		fetchData();
	}, []);

	let setRoutes = () => {
		return categoriesList.map(item => (
			<Route
				key={item.name}
				path={`/${item.name}`}
				element={<CategoryPage catName={item.name} />}
			/>
		));
	};

	return (
		<Router>
			<Routes>
				{setRoutes()}

				<Route path="/" element={<Navigate to="/all" />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/:category/:id" element={<ProductPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default App;
