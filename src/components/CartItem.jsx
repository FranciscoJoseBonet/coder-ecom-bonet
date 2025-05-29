import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { fCurrency } from "../utils/FormatCurrency";
import { Link } from "react-router-dom";

const CartItem = ({ item, onQuantityChange }) => {
	const handleIncrease = () => {
		onQuantityChange(item.id, item.quantity + 1);
	};
	const handleDecrease = () => {
		if (item.quantity <= 1) return;
		onQuantityChange(item.id, item.quantity - 1);
	};

	return (
		<div
			className="card mb-4 border-0 bg-white rounded-3"
			style={{ boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)", paddingRight: "1rem" }}
		>
			<div className="d-flex flex-column flex-lg-row flex-md-row align-items-center p-2 g-0">
				<div className="col-md-2 col-4 align-items center d-flex justify-content-center">
					<Link to={item.id} style={{ textDecoration: "none" }}>
						<img
							src={item.image}
							alt={item.name}
							className="img-fluid rounded"
							style={{ height: "9rem", width: "auto" }}
						/>
					</Link>
				</div>
				<div className="col-md-4 col-10">
					<div className="card-body py-2 text-lg-start text-md-start text-center">
						<Link to={item.id} style={{ textDecoration: "none", color: "inherit" }}>
							<h5 className="card-title mb-0">{item.name}</h5>
							<p className="card-text text-muted small">ID: {item.id}</p>
						</Link>
					</div>
				</div>
				<div className="col-md-2 col-6">
					<div className="input-group input-group-sm">
						<button
							className="btn btn-outline-secondary pb-2"
							type="button"
							onClick={handleDecrease}
						>
							<FaMinus size={14} />
						</button>
						<input
							type="text"
							className="form-control text-center border border-secondary"
							value={item.quantity}
							readOnly
							aria-label="Quantity"
						/>
						<button
							className="btn btn-outline-secondary pb-2"
							type="button"
							onClick={handleIncrease}
						>
							<FaPlus size={14} />
						</button>
					</div>
				</div>
				<div className="col-md-3 col-6 text-center mt-3 mt-md-0 mt-lg-0">
					<span className="fw-bold">{fCurrency(item.price)}</span>
				</div>
				<div className="col-md-1 col-6 text-lg-end text-md-end text-center mt-3 mt-md-0 mt-lg-0 mb-3 mb-md-0 mb-lg-0">
					<button className="btn btn-sm btn-outline-danger p-2 w-100">
						<FaTrash size={14} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
