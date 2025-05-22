import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import VoidCart from "../components/VoidCart.jsx";

// Sample cart items data (for display purposes only)
const sampleCartItems = [
	{
		id: 1,
		name: "Gibson Les Paul Standard",
		price: 2499.99,
		quantity: 1,
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 2,
		name: "Yamaha P-125 Digital Piano",
		price: 649.99,
		quantity: 1,
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 3,
		name: "Shure SM58 Microphone",
		price: 99.99,
		quantity: 2,
		image: "/placeholder.svg?height=100&width=100",
	},
];

const CartPage = () => {
	return <VoidCart />;
};

export default CartPage;
