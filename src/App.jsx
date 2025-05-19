import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

function App() {
	return (
		<>
			<div className="d-flex flex-column min-vh-100">
				<Navbar />
				<main className="flex-grow-1">
					<div className="container py-5">
						<h1>Bienvenidos a RbMusic</h1>
						<p>Tu lugar de excelencia de venta de instrumentos</p>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}

export default App;
