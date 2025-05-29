import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ItemDetail from "./ItemDetail";
import SpinnerLoading from "./SpinnerLoading";

import { fetchProducts } from "../mock/AsyncService";
import { useFilteredFetch } from "../utils/useFilteredFetch";
import FetchError from "./FetchError";

const ItemDetailContainer = () => {
	const { itemId } = useParams();

	const {
		data: products,
		loading,
		error,
	} = useFilteredFetch(fetchProducts, [{ key: "id", value: itemId, compare: "===" }]);

	const product = products[0];

	if (loading) {
		return <SpinnerLoading />;
	}

	if (error || !product) {
		return <FetchError />;
	}

	return (
		<Container className="py-5">
			<ItemDetail product={product} />
		</Container>
	);
};

export default ItemDetailContainer;
