import VoidCart from "../components/VoidCart.jsx";

import CartItemContainer from "../components/CartItemContainer.jsx";

import { useContext } from "react";

import { CartContext } from "../context/CartContext.jsx";

const CartPage = () => {
	const { isCartVoid } = useContext(CartContext);

	return (
		<div className="container py-5">
			<div className="row">{isCartVoid() ? <VoidCart /> : <CartItemContainer />}</div>
		</div>
	);
};

export default CartPage;
