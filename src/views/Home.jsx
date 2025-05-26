import { FaArrowRight, FaGuitar, FaDrum, FaHeadphones } from "react-icons/fa";
import { GiSaxophone } from "react-icons/gi";
import { Link } from "react-router-dom";

{
	/* Importacion de los componentes a usar */
}
import ProductCard from "../components/ProductCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import CallToAction from "../components/CallToAction.jsx";

// Data de los productos inventada
const featuredProducts = [
	{
		id: 1,
		name: "Gibson Les Paul Standard",
		price: 2499.99,
		image: "https://i.postimg.cc/GHLtXKKw/gibson.png",
		category: "Guitars",
	},
	{
		id: 2,
		name: "Yamaha P-125 Digital Piano",
		price: 649.99,
		image: "https://i.postimg.cc/LhBhkwz3/yamaha.jpg",
		category: "Keyboards",
	},
	{
		id: 3,
		name: "Fender American Professional II",
		price: 1699.99,
		image: "https://http2.mlstatic.com/D_NQ_NP_734948-MLA70441977503_072023-O.webp",
		category: "Guitars",
	},
	{
		id: 4,
		name: "Roland TD-17KVX V-Drums",
		price: 1699.99,
		image: "https://i.postimg.cc/ZCwR2Ns9/roland-Drum.jpg",
		category: "Drums",
	},
];

// Category data
const categories = [
	{
		id: "strings",
		name: "Strings",
		description: "Guitars, Violins, Cellos & more",
		icon: <FaGuitar size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(235, 94, 40, 0.1)",
	},
	{
		id: "winds",
		name: "Winds",
		description: "Saxophones, Flutes, Clarinets & more",
		icon: <GiSaxophone size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(52, 152, 219, 0.1)",
	},
	{
		id: "percussion",
		name: "Percussion",
		description: "Drums, Cymbals, Percussion & more",
		icon: <FaDrum size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(155, 89, 182, 0.1)",
	},
	{
		id: "accessories",
		name: "Accessories",
		description: "Headphones, Cables, Stands & more",
		icon: <FaHeadphones size={36} />,
		image: "/placeholder.svg?height=400&width=600",
		color: "rgba(46, 204, 113, 0.1)",
	},
];

const HomePage = () => {
	return (
		<div>
			{/* Hero */}
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
						<Link to="#" className="text-dark text-decoration-none">
							View All <FaArrowRight className="ms-1" size={14} />
						</Link>
					</div>
					<div className="row g-4">
						{featuredProducts.map((product) => (
							<div key={product.id} className="col-sm-6 col-lg-3">
								<ProductCard product={product} />
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
						/>
						<CallToAction
							title="Special Offers"
							cardText="Limited-time deals on selected instruments and accessories"
							buttonText="View Special Offers"
							col="secondary"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
