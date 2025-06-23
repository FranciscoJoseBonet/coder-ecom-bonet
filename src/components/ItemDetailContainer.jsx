import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ItemDetail from "./ItemDetail";
import SpinnerLoading from "./SpinnerLoading";

import FetchError from "./FetchError";
import { useEffect, useState } from "react";
import { db } from "../service/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [detail, setDetail] = useState();

	useEffect(() => {
		setLoading(true);
		const productsCollection = collection(db, "products");
		const docRef = doc(productsCollection, itemId);
		getDoc(docRef)
			.then((res) => {
				if (res.data()) {
					setDetail({ ...res.data(), id: res.id });
				} else {
					setError(true);
				}
			})
			.catch((err) => {
				console.error("Error al cargar el item, ", err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [itemId]);

	if (loading) {
		return <SpinnerLoading />;
	}

	if (error || !detail) {
		return <FetchError error={error} />;
	}

	return (
		<Container className="py-5">
			<ItemDetail product={detail} />
		</Container>
	);
};

export default ItemDetailContainer;
