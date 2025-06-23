import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchSuppLinks = async () => {
	const suppLinksCollection = await getDocs(collection(db, "suppLinks"));
	return suppLinksCollection.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};
