import { useEffect, useState } from "react";

import { fetchProducts } from "../mock/AsyncService";

import ItemListContainer from "../components/ItemListContainer";
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
					{/* Grilla de productos */}
					<div className="d-none d-md-block mb-4" style={{ background: "#fdfdfd" }}>
						<ItemListContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
