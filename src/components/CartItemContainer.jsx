import CartItem from "../components/CartItem.jsx";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import TotalSummary from "../components/TotalSummary.jsx";

const CartItemContainer = () => {
	const { cart } = useContext(CartContext);

	const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const taxPercentage = 0.21;
	const shipping = 16000;

	return (
		<>
			<div className="col-lg-8 mb-4 mb-lg-0">
				<h1 className="mb-4 text-lg-start text-md-start text-center">Shopping Cart</h1>
				<div className="d-none d-md-flex fw-bold text-muted mb-3 px-4">
					<div className="col-md-6">Product</div>
					<div className="col-md-2 text-center">Quantity</div>
					<div className="col-md-3 text-center">Price</div>
					<div className="col-md-1 text-end">Remove</div>
				</div>

				{cart.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<div className="col-lg-4">
				<TotalSummary
					subtotal={subtotal}
					taxPercentage={taxPercentage}
					shipping={shipping}
				/>
			</div>
		</>
	);
};

export default CartItemContainer;
