import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "../css/CartWidget.css";

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	return (
		<div className="cart__widget position-relative">
			<FaShoppingCart className="cart__icon" />
			<span className="cart__count">5</span>
		</div>
	);
};

export default CartWidget;
