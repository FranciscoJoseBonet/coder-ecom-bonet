import { useEffect, useState } from "react";

import { fetchProducts } from "../mock/AsyncService";

import Item from "../components/Item";
import ShopHeader from "../components/ShopHeader";

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error("Error al cargar los datos: ", error);
			});
	}, []);

	return (
		<div>
			<ShopHeader />
			<div className="container">
				<div className="row">
					{/* Shop arranca aca */}
					<div className="col-lg-12">
						<div className="d-flex justify-content-between align-items-center mb-4">
							{/* aca va el conteo por categorias (tengo que poner un atributo de cantidad de cada categoria para que aparezca con el filtro) */}
							<div className="results-info">
								<span className="text-muted">
									Showing <span id="resultsStart">1</span>-<span id="resultsEnd">12</span>{" "}
									of <span id="totalResults">156</span> results
								</span>
							</div>
							<div className="d-md-none">
								<select className="form-select sort-select-mobile">
									<option value="featured">Featured</option>
									<option value="price-low">Price: Low to High</option>
									<option value="price-high">Price: High to Low</option>
									<option value="name">Name A-Z</option>
									<option value="rating">Highest Rated</option>
									<option value="newest">Newest</option>
								</select>
							</div>
						</div>

						{/* Grilla de productos */}
						<div className="d-none d-md-block mb-4" style={{ background: "#fdfdfd" }}>
							<div className="row g-4 product-grid" id="productGrid">
								{products.map((product) => (
									<div key={product.id} className="col-sm-6 col-lg-4 product-item">
										<Item product={product} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
