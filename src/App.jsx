import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./views/Home.jsx";
import Shop from "./views/Shop.jsx";
import CartPage from "./views/CartPage.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./views/NotFound.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />
			<Routes>
				{/* Rutas a las vistas principales */}
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="*" element={<NotFound />} />

				{/* Rutas para filtrar por categoria */}
				<Route path="/category/:categoryId" element={<ItemListContainer head={true} />} />

				{/* Rutas para ver los detalles del item */}
				<Route path="/:itemId" element={<ItemDetailContainer />} />
				<Route path="/shop/:itemId" element={<ItemDetailContainer />} />
				<Route path="/cart/:itemId" element={<ItemDetailContainer />} />
				<Route path="/category/:categoryId/:itemId" element={<ItemDetailContainer />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
