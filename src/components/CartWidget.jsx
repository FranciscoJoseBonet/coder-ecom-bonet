import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "../css/CartWidget.css";

const CartWidget = () => {
	const { cartLen } = useContext(CartContext);
	return (
		<div className="cart__widget position-relative">
			<FaShoppingCart className="cart__icon" />

			{cartLen() > 0 && <span className="cart__count">{Number(cartLen())}</span>}
		</div>
	);
};

export default CartWidget;
