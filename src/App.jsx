import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./views/Home.jsx";
import CartPage from "./views/CartPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
				<Route parth="/category/:categoryId" />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
