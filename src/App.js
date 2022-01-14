import './App.css';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import { CATEGORY_QUERY } from './utils/queries';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { ProductProvider } from './utils/productContext';

function App() {
	function QueryFormat(queryVar) {
		const fetchedQueryVar = useQuery(CATEGORY_QUERY, { variables: { title: queryVar } });
		return fetchedQueryVar;
	}

	const { loading: allLoading, error: allError, data: allData } = QueryFormat('all');
	const { loading: clothesLoading, error: clothesError, data: clothesData } = QueryFormat('clothes');
	const { loading: techLoading, error: techError, data: techData } = QueryFormat('tech');

	if (allLoading | clothesLoading | techLoading) return <p>Loading...</p>;
	if (allError | clothesError | techError) return <p>Error :(</p>;

	return (
		<ProductProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/all" />} />
					<Route path="/all" element={<CategoryPage data={allData} />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/clothes" element={<CategoryPage data={clothesData} />} />
					<Route path="/tech" element={<CategoryPage data={techData} />} />
					<Route path="/:category/:id" element={<ProductPage />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</ProductProvider>
	);
}

export default App;
