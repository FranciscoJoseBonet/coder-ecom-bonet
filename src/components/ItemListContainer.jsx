import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { fetchProducts } from "../mock/AsyncService";
import Greeting from "./Greeting";

const ItemListContainer = ({ text, head = false, filterBy = "" }) => {
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
				} else if (filterBy) {
					const filtered = res.filter((product) => product[filterBy] === true);
					setProducts(filtered);
				} else {
					setProducts(res);
				}
			})
			.catch((error) => {
				console.error("Se produjo un error al cargar los productos: ", error);
			});
	}, [categoryId, filterBy]);

	return (
		<>
			{head ? (
				<Greeting
					text={text}
					category={
						categoryId
							? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
							: "All the products"
					}
				/>
			) : null}
			<div className="container my-4">
				<ItemList products={products} />
			</div>
		</>
	);
};

export default ItemListContainer;
