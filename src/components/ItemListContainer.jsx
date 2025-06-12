import { useParams } from "react-router-dom";

import { fetchProducts } from "../service/firestore/fetchProducts";
import { useFilteredFetch } from "../utils/useFilteredFetch";

import SpinnerLoading from "./SpinnerLoading";
import ItemList from "./ItemList";
import Greeting from "./Greeting";

const ItemListContainer = ({ text, head = false, filterBy }) => {
	const { categoryId } = useParams();

	const filters = [];

	if (categoryId) {
		filters.push({ key: "category", value: categoryId, compare: "equalsIgnoreCase" });
	} else if (filterBy) {
		filters.push({ key: filterBy, value: true });
	}

	const { data: products, loading, error } = useFilteredFetch(fetchProducts, filters);

	if (loading) {
		return <SpinnerLoading />;
	}

	if (error) {
		return <FetchError error={error} />;
	}
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
