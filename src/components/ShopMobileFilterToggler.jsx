import { FaFilter, FaChevronDown } from "react-icons/fa";

const MobileFilterToggle = () => {
	return (
		<div className="d-md-none mb-3">
			<button
				className="btn btn-outline-secondary w-100 mobile-filter-toggle"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#mobileFilters"
				aria-expanded="false"
				aria-controls="mobileFilters"
			>
				<FaFilter className="me-2" />
				Filters & Categories
				<FaChevronDown className="ms-auto" />
			</button>
		</div>
	);
};

export default MobileFilterToggle;
