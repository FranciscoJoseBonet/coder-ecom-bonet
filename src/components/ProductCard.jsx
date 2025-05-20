const ProductCard = ({ product }) => {
	return (
		<div className="card h-100 border-0 shadow-sm">
			<div className="position-relative">
				<img
					src={product.image || "/placeholder.svg"}
					className="card-img-top"
					alt={product.name}
				/>
				<span className="badge bg-dark position-absolute top-0 end-0 m-2">
					{product.category}
				</span>
			</div>
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text fw-bold">${product.price.toFixed(2)}</p>
				<div className="d-flex justify-content-between align-items-center">
					<button className="btn btn-outline-dark btn-sm">Add to Cart</button>
					<a href={`/product/${product.id}`} className="btn btn-link text-dark p-0">
						View Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
