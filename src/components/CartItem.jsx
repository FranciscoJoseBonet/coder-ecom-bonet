import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item }) => {
	return (
		<div className="card mb-3 border-0 shadow-sm">
			<div className="row g-0 align-items-center p-2">
				<div className="col-md-2 col-4">
					<img src={item.image} alt={item.name} className="img-fluid rounded" />
				</div>
				<div className="col-md-4 col-8">
					<div className="card-body py-2">
						<h5 className="card-title mb-0">{item.name}</h5>
						<p className="card-text text-muted small">ID: {item.id}</p>
					</div>
				</div>
				<div className="col-md-2 col-4">
					<div className="input-group input-group-sm">
						<button className="btn btn-outline-secondary" type="button">
							<FaMinus size={12} />
						</button>
						<input
							type="text"
							className="form-control text-center"
							value={item.quantity}
							readOnly
							aria-label="Quantity"
						/>
						<button className="btn btn-outline-secondary" type="button">
							<FaPlus size={12} />
						</button>
					</div>
				</div>
				<div className="col-md-2 col-4 text-center">
					<span className="fw-bold">${item.price.toFixed(2)}</span>
				</div>
				<div className="col-md-2 col-4 text-end">
					<button className="btn btn-sm btn-outline-danger">
						<FaTrash size={14} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
