import { FaShoppingCart } from "react-icons/fa";

const VoidCart = () => {
	return (
		<div className="text-center py-5">
			<div className="mb-4">
				<FaShoppingCart size={64} className="text-muted" />
			</div>
			<h3>Your cart is empty</h3>
			<p className="text-muted mb-4">
				Looks like you haven't added any items to your cart yet.
			</p>
			<a href="#" className="btn btn-dark px-4 py-2">
				Continue Shopping
			</a>
		</div>
	);
};

export default VoidCart;
