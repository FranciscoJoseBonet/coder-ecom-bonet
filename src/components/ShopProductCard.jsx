import { fCurrency } from "../utils/FormatCurrency";

const ShopProductCard = ({ product }) => {
	return (
		<div className="card h-100 border-0 shadow-sm product-card">
			<div className="position-relative">
				<img
					src={product.image || "/placeholder.svg"}
					className="card-img-top"
					alt={product.name}
				/>
				{product.originalPrice && (
					<span className="badge bg-danger position-absolute top-0 start-0 m-2">
						Sale
					</span>
				)}
				<div className="position-absolute top-0 end-0 m-2">
					<button className="btn btn-sm btn-outline-light rounded-circle wishlist-btn">
						<i className="far fa-heart"></i>
					</button>
				</div>
			</div>
			<div className="card-body">
				<span className="badge bg-light text-dark mb-2">{product.category}</span>
				<h5 className="card-title">{product.name}</h5>
				<div className="mb-2">
					<div className="d-flex align-items-center">
						<div className="text-warning me-1">
							{"★".repeat(product.rating)}
							{"☆".repeat(5 - product.rating)}
						</div>
						<small className="text-muted">({product.reviews})</small>
					</div>
				</div>
				<div className="d-flex align-items-center justify-content-between">
					<div>
						<span className="h5 mb-0">{fCurrency(product.price)}</span>
						{product.originalPrice && (
							<span className="text-muted text-decoration-line-through ms-2">
								${product.originalPrice.toFixed(2)}
							</span>
						)}
					</div>
				</div>
				<button className="btn btn-dark w-100 mt-3 add-to-cart-btn">Add to Cart</button>
			</div>
		</div>
	);
};

export default ShopProductCard;
