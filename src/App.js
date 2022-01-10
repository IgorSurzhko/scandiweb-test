import './App.css';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

const TECH_CATEGORY = gql`
	query {
		category(input: { title: "tech" }) {
			products {
				id
				name
			}
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(TECH_CATEGORY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/all" />} />

				<Route path="/all" element={<Cart />} />
				<Route path="/clothes" element={<ProductPage />} />
				<Route path="/tech" element={<CategoryPage />} />
			</Routes>
		</Router>
	);
}

export default App;
