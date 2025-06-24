import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

// Pensado para usar con el customHook useFetchProducts

const fetchProducts = async (filters = []) => {
	let q = collection(db, "products");

	if (filters.length > 0) {
		const wheres = filters.map((f) => {
			let op = "==";
			if (f.compare === "gte") op = ">=";
			if (f.compare === "lte") op = "<=";
			if (f.compare === "equalsIgnoreCase") {
				return where(f.key, "==", f.value.toLowerCase());
			}
			return where(f.key, op, f.value);
		});
		q = query(q, ...wheres);
	}

	const snapshot = await getDocs(q);
	return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default fetchProducts;
