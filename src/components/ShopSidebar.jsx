import { FaSearch } from "react-icons/fa";

const CategorySidebar = () => {
	const categories = [
		{ name: "All Categories", count: 156 },
		{ name: "Guitars", count: 45 },
		{ name: "Keyboards & Pianos", count: 32 },
		{ name: "Drums & Percussion", count: 28 },
		{ name: "Wind Instruments", count: 24 },
		{ name: "Accessories", count: 27 },
	];

	const priceRanges = [
		{ label: "Under $100", min: 0, max: 100 },
		{ label: "$100 - $500", min: 100, max: 500 },
		{ label: "$500 - $1000", min: 500, max: 1000 },
		{ label: "$1000 - $2000", min: 1000, max: 2000 },
		{ label: "Over $2000", min: 2000, max: null },
	];

	const brands = ["Gibson", "Fender", "Yamaha", "Roland", "Shure", "Audio-Technica"];

	return (
		<div className="shop-sidebar">
			{/* Search Filter */}
			<div className="card border-0 shadow-sm mb-4">
				<div className="card-body">
					<h5 className="card-title">Search Products</h5>
					<div className="input-group">
						<input
							type="text"
							className="form-control search-input"
							placeholder="Search instruments..."
							id="productSearch"
						/>
						<button className="btn btn-outline-secondary search-btn" type="button">
							<FaSearch />
						</button>
					</div>
				</div>
			</div>

			{/* Categories Filter */}
			<div className="card border-0 shadow-sm mb-4">
				<div className="card-body">
					<h5 className="card-title">Categories</h5>
					<div className="category-list">
						{categories.map((category, index) => (
							<div key={index} className="form-check mb-2">
								<input
									className="form-check-input category-filter"
									type="radio"
									name="category"
									id={`category-${index}`}
									defaultChecked={index === 0}
								/>
								<label
									className="form-check-label d-flex justify-content-between"
									htmlFor={`category-${index}`}
								>
									<span>{category.name}</span>
									<span className="text-muted">({category.count})</span>
								</label>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Price Range Filter */}
			<div className="card border-0 shadow-sm mb-4">
				<div className="card-body">
					<h5 className="card-title">Price Range</h5>
					<div className="price-range-list">
						{priceRanges.map((range, index) => (
							<div key={index} className="form-check mb-2">
								<input
									className="form-check-input price-filter"
									type="checkbox"
									id={`price-${index}`}
								/>
								<label className="form-check-label" htmlFor={`price-${index}`}>
									{range.label}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Brand Filter */}
			<div className="card border-0 shadow-sm mb-4">
				<div className="card-body">
					<h5 className="card-title">Brands</h5>
					<div className="brand-list">
						{brands.map((brand, index) => (
							<div key={index} className="form-check mb-2">
								<input
									className="form-check-input brand-filter"
									type="checkbox"
									id={`brand-${index}`}
								/>
								<label className="form-check-label" htmlFor={`brand-${index}`}>
									{brand}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Clear Filters */}
			<button className="btn btn-outline-secondary w-100 clear-filters-btn">
				Clear All Filters
			</button>
		</div>
	);
};

export default CategorySidebar;
