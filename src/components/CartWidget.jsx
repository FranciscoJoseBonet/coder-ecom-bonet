import { FaShoppingCart } from "react-icons/fa";
import "../css/CartWidget.css";

const CartWidget = () => {
	return (
		<div className="cart__widget position-relative">
			<FaShoppingCart className="cart__icon" />
			<span className="cart__count">5</span>
		</div>
	);
};

export default CartWidget;
