import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { fCurrency } from "../utils/FormatCurrency";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Swal from "sweetalert2";

const TotalSummary = ({ subtotal, taxPercentage, shipping, btn = true }) => {
	const { clear } = useContext(CartContext);

	let taxExtraValue = subtotal * taxPercentage;
	let total = subtotal + taxExtraValue + shipping;

	const handleClear = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "This will remove all items from your cart.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, clear cart!",
			cancelButtonText: "Cancel",
		}).then((result) => {
			if (result.isConfirmed) {
				clear();
			}
		});
	};

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

				{btn ? (
					<>
						<div className="d-flex gap-2 mb-3">
							<Link to="/checkout" className="btn btn-dark w-75 py-2">
								Proceed to Checkout
							</Link>
							<button className="btn btn-outline-danger w-25 py-2" onClick={handleClear}>
								<FaTrash />
							</button>
						</div>
						<Link
							to="/shop"
							className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
						>
							<FaArrowLeft className="me-2" size={14} />
							Continue Shopping
						</Link>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default TotalSummary;
