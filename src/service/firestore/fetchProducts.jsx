import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchProducts = async () => {
	const productsCollection = await getDocs(collection(db, "products"));
	return productsCollection.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};
