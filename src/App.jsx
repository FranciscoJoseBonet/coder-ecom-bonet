import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./views/Home.jsx";
import CartPage from "./views/CartPage.jsx";
import NotFound from "./views/NotFound.jsx";
import Shop from "./views/Shop.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
