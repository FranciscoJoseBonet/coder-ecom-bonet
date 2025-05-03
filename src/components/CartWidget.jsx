import { FaShoppingCart } from "react-icons/fa";
import "../css/CartWidget.css";

const CartWidget = () => {
	return (
		<div className="cart__widget">
			<FaShoppingCart className="cart__icon" />
			<span className="cart__count">3</span>
		</div>
	);
};

export default CartWidget;
