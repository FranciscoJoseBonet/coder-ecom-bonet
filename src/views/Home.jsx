import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchCategories } from "../mock/AsyncService.jsx";

import ItemListContainer from "../components/ItemListContainer.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import HeroSection from "../components/HeroSection.jsx";

const HomePage = () => {
	const [categories, setCategories] = useState([]);

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
					<HeroSection
						title="Find Your Perfect Sound"
						subtitle="High-quality instruments for passionate musicians, from beginners to
					professionals"
						imgPath="https://i.postimg.cc/SxJGrGXb/s.jpg"
					/>
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
						<ItemListContainer filterBy="featured" />
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

			{/* CTA */}
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
