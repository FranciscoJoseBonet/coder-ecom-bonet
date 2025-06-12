// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAHXV4ci6D3w0-r-tMhPn56l6zi2q0lPgg",
	authDomain: "coder-ecom-bonet.firebaseapp.com",
	projectId: "coder-ecom-bonet",
	storageBucket: "coder-ecom-bonet.firebasestorage.app",
	messagingSenderId: "454868261236",
	appId: "1:454868261236:web:6ef178a3baac4f533af421",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
