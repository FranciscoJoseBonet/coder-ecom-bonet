import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { iconMap } from "../utils/iconMap";

const CategoryCard = ({ category }) => {
	let Icon = iconMap[category.icon];

	return (
		<div className="card h-100 border-0 shadow-sm overflow-hidden">
			<div className="row g-0 h-100">
				<div
					className="col-md-4 d-flex align-items-center justify-content-center py-4"
					style={{ backgroundColor: category.color }}
				>
					{<Icon size={48} />}
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{category.name}</h5>
						<p className="card-text text-muted">{category.description}</p>
						<Link
							to={`/category/${category.id}`}
							className="text-dark text-decoration-none"
						>
							Browse {category.name} <FaArrowRight className="ms-1" size={14} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
