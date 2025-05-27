import { FaList, FaTh } from "react-icons/fa";

const ShopHeader = () => {
	return (
		<div className="shop-header bg-light py-4 mb-4">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h1 className="mb-2">Shop Instruments</h1>
						<p className="text-muted mb-0">
							Discover premium musical instruments for every musician
						</p>
					</div>
					<div className="col-md-6">
						<div className="d-flex justify-content-md-end align-items-center gap-3">
							<div className="d-flex align-items-center">
								<label htmlFor="sortSelect" className="form-label me-2 mb-0">
									Sort by:
								</label>
								<select
									className="form-select sort-select"
									id="sortSelect"
									style={{ width: "auto" }}
								>
									<option value="featured">Featured</option>
									<option value="price-low">Price: Low to High</option>
									<option value="price-high">Price: High to Low</option>
									<option value="name">Name A-Z</option>
									<option value="rating">Highest Rated</option>
									<option value="newest">Newest</option>
								</select>
							</div>
							<div className="btn-group view-toggle" role="group">
								<button
									type="button"
									className="btn btn-outline-secondary active grid-view-btn"
								>
									<FaTh />
								</button>
								<button type="button" className="btn btn-outline-secondary list-view-btn">
									<FaList />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopHeader;
