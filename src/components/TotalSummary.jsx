import { FaArrowLeft } from "react-icons/fa";
import fCurrency from "../utils/FormatCurrency.js";

const TotalSummary = ({ subtotal, taxPercentage, shipping }) => {
	let taxExtraValue = subtotal * taxPercentage;
	let total = subtotal + taxExtraValue + shipping;

	return (
		<div
			className="card border-0 bg-light rounded-3 position-sticky"
			style={{
				boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)",
				top: "70px",
				marginTop: "4rem",
			}}
		>
			<div className="card-body">
				<h4 className="card-title mb-4">Order Summary</h4>
				<div className="d-flex justify-content-between mb-2">
					<span>Subtotal</span>
					<span>{fCurrency(subtotal)}</span>
				</div>
				<div className="d-flex justify-content-between mb-2">
					<span>Tax</span>
					<span>{fCurrency(taxExtraValue)}</span>
				</div>
				<div className="d-flex justify-content-between mb-2">
					<span>Shipping</span>
					<span>{fCurrency(shipping)}</span>
				</div>
				<hr />
				<div className="d-flex justify-content-between mb-4">
					<span className="fw-bold">Total</span>
					<span className="fw-bold">{fCurrency(total)}</span>
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
