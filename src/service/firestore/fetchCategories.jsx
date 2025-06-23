import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategories = async () => {
	const categoryCollection = await getDocs(collection(db, "categories"));
	return categoryCollection.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};
