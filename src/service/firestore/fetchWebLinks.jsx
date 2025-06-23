import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchWebLinks = async () => {
	const webLinksCollection = await getDocs(collection(db, "webLinks"));
	return webLinksCollection.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};
