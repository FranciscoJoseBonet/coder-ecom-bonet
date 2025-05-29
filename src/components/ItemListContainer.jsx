import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { fetchProducts } from "../mock/AsyncService";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		fetchProducts()
			.then((res) => {
				if (categoryId) {
					const filtered = res.filter(
						(product) => product.category.toLowerCase() === categoryId
					);
					setProducts(filtered);
				} else {
					setProducts(res);
				}
			})
			.catch((error) => {
				console.error("Se produjo un error al cargar los productos: ", error);
			});
	}, [categoryId]);

	return (
		<div className="container my-4">
			<h2 className="mb-4 text-center">
				{categoryId ? `Category: ${categoryId}` : "All the products"}
			</h2>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
