import { useContext, useEffect, useState } from "react";
import VoidCart from "../components/VoidCart.jsx";
import CartItemContainer from "../components/CartItemContainer.jsx";
import { CartContext } from "../context/CartContext.jsx";
import SpinnerLoading from "../components/SpinnerLoading.jsx";

const CartPage = () => {
	const { isCartVoid } = useContext(CartContext);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		setLoading(true);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <SpinnerLoading />;
	}

	return (
		<div className="container py-5">
			<div className="row">{isCartVoid() ? <VoidCart /> : <CartItemContainer />}</div>
		</div>
	);
};

export default CartPage;
