import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Main />}
				/>
				<Route
					path=':category'
					element={<CategoryPage />}
				></Route>
				<Route
					path=':category/:product'
					element={<ProductPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
