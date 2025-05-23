import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { fCurrency } from "../utils/FormatCurrency";

const CartItem = ({ item }) => {
	return (
		<div
			className="card mb-4 border-0 bg-white rounded-3"
			style={{ boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)", paddingRight: "1rem" }}
		>
			<div className="row g-0 align-items-center p-2">
				<div className="col-md-2 col-4 align-items center d-flex justify-content-center">
					<img
						src={item.image}
						alt={item.name}
						className="img-fluid rounded"
						style={{ height: "9rem", width: "auto" }}
					/>
				</div>
				<div className="col-md-4 col-8">
					<div className="card-body py-2">
						<h5 className="card-title mb-0">{item.name}</h5>
						<p className="card-text text-muted small">ID: {item.id}</p>
					</div>
				</div>
				<div className="col-md-2 col-4">
					<div className="input-group input-group-sm">
						<button className="btn btn-outline-secondary pb-2" type="button">
							<FaMinus size={14} />
						</button>
						<input
							type="text"
							className="form-control text-center border border-secondary"
							value={item.quantity}
							readOnly
							aria-label="Quantity"
						/>
						<button className="btn btn-outline-secondary pb-2" type="button">
							<FaPlus size={14} />
						</button>
					</div>
				</div>
				<div className="col-md-3 col-4 text-center">
					<span className="fw-bold">{fCurrency(item.price)}</span>
				</div>
				<div className="col-md-1 col-4 text-end">
					<button className="btn btn-sm btn-outline-danger p-2">
						<FaTrash size={14} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
