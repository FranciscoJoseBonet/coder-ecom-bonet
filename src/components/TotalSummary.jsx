import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const TotalSummary = ({ subtotal, tax, shipping }) => {
	const total = subtotal + tax + shipping;

	return (
		<div className="card border-0 shadow-sm">
			<div className="card-body">
				<h4 className="card-title mb-4">Order Summary</h4>
				<div className="d-flex justify-content-between mb-2">
					<span>Subtotal</span>
					<span>${subtotal.toFixed(2)}</span>
				</div>
				<div className="d-flex justify-content-between mb-2">
					<span>Tax</span>
					<span>${tax.toFixed(2)}</span>
				</div>
				<div className="d-flex justify-content-between mb-2">
					<span>Shipping</span>
					<span>${shipping.toFixed(2)}</span>
				</div>
				<hr />
				<div className="d-flex justify-content-between mb-4">
					<span className="fw-bold">Total</span>
					<span className="fw-bold">${total.toFixed(2)}</span>
				</div>
				<button className="btn btn-dark w-100 py-2">Proceed to Checkout</button>
				<div className="mt-3">
					<a
						href="/shop"
						className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
					>
						<FaArrowLeft className="me-2" size={14} />
						Continue Shopping
					</a>
				</div>
			</div>
		</div>
	);
};

export default TotalSummary;
