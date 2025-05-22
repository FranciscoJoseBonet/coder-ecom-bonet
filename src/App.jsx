import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./views/Home.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import CartPage from "./views/CartPage.jsx";

function App() {
	return (
		<>
			<div className="d-flex flex-column min-vh-100">
				<Navbar />
				{/* Página principal */}
				<main className="flex-grow-1">
					{/* <HomePage /> */}
					<CartPage />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default App;
