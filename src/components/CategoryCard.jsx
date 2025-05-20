import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ category }) => {
	return (
		<div className="card h-100 border-0 shadow-sm overflow-hidden">
			<div className="row g-0 h-100">
				<div
					className="col-md-4 d-flex align-items-center justify-content-center py-4"
					style={{ backgroundColor: category.color }}
				>
					{category.icon}
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{category.name}</h5>
						<p className="card-text text-muted">{category.description}</p>
						<a
							href={`/category/${category.id}`}
							className="text-dark text-decoration-none"
						>
							Browse {category.name} <FaArrowRight className="ms-1" size={14} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
