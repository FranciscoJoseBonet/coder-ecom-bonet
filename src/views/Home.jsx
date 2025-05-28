import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchProducts, fetchCategories } from "../mock/AsyncService.jsx";

import Item from "../components/Item.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import CallToAction from "../components/CallToAction.jsx";

const HomePage = () => {
	const [featuredProducts, setfProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				setfProducts(data.filter((products) => products.featured === true));
			})
			.catch((error) => {
				console.error("Error en el fetching de los productos: ", error);
			});
	}, []);

	useEffect(() => {
		fetchCategories()
			.then((data) => {
				setCategories(data);
			})
			.catch((error) => {
				console.error("Hubo un error al cargar los datos: ", error);
			});
	}, []);

	return (
		<div>
			{/* Heroooo */}
			<section className="py-5 bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-5 mb-lg-0">
							<h1 className="display-4 fw-bold mb-3">Find Your Perfect Sound</h1>
							<p className="lead text-muted mb-4">
								High-quality instruments for passionate musicians, from beginners to
								professionals.
							</p>
							<div className="d-flex gap-3 d-flex justify-content-center">
								<Link to="/shop" className="btn btn-dark btn-lg px-4 py-2 w-100">
									Shop Now
								</Link>
								<Link to="/about" className="btn btn-outline-dark btn-lg px-4 py-2 w-100">
									Learn More
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								src="https://i.postimg.cc/SxJGrGXb/s.jpg"
								alt="Premium musical instruments"
								className="img-fluid rounded shadow"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Productos destacadso */}
			<section className="py-5">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center mb-4">
						<h2 className="mb-0">Featured Instruments</h2>
						<Link to="/shop" className="text-dark text-decoration-none">
							View All <FaArrowRight className="ms-1" size={14} />
						</Link>
					</div>
					<div className="row g-4">
						{featuredProducts.map((product) => (
							<div key={product.id} className="col-sm-6 col-lg-3">
								<Item product={product} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Categorias */}
			<section className="py-5 bg-light">
				<div className="container">
					<h2 className="mb-4">Shop by Category</h2>
					<div className="row g-4">
						{categories.map((category) => (
							<div key={category.id} className="col-md-6">
								<CategoryCard category={category} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contenido adicional */}
			<section className="py-5">
				<div className="container">
					<div className="row g-">
						<CallToAction
							title="New Arrivals"
							cardText="Discover our latest collection of premium instruments"
							buttonText="Explore New Arrivals"
							col="dark"
							link="new-arrivals"
						/>
						<CallToAction
							title="Special Offers"
							cardText="Limited-time deals on selected instruments and accessories"
							buttonText="View Special Offers"
							col="secondary"
							link="discounts"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
