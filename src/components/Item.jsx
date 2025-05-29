import { fCurrency } from "../utils/FormatCurrency";
import StarsRender from "./StarsRender";

import styled from "styled-components";

import { Link } from "react-router-dom";

// Uso esta libreria para que quede mas lindo :)
const Card = styled.div`
	height: 100%;
	background: #fff;
	border: 1px solid rgba(0, 0, 0, 0.05);
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}
`;

const ShopProductCard = ({ product }) => {
	return (
		<Link to={"item/" + product.id} style={{ textDecoration: "none" }}>
			<Card>
				<div className="card h-100 border-0 shadow-sm product-card">
					<div className="position-relative">
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ height: "200px" }}
						>
							<img
								src={product.image}
								className="img-fluid"
								alt={product.name}
								style={{ maxHeight: "100%", width: "auto", height: "auto" }}
							/>
						</div>
						{product.originalPrice && (
							<span className="badge bg-dark position-absolute top-0 end-0 m-2">
								{product.category}
							</span>
						)}
					</div>
					<div className="card-body d-flex flex-column justify-content-between">
						<h5 className="card-title">{product.name}</h5>
						<div className="mb-2">
							<div className="d-flex align-items-center">
								<div className="text-warning me-1">{StarsRender(product.rating)}</div>
								<small className="text-muted">({product.reviews})</small>
							</div>
						</div>
						<div className="text-muted mb-2">
							{product.description.length > 50
								? product.description.slice(0, 50) + "..."
								: product.description}
						</div>
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<span className="h5 mb-0">{fCurrency(product.price)}</span>
								{product.originalPrice && (
									<span className="text-muted text-decoration-line-through ms-2">
										{fCurrency(product.originalPrice)}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</Card>
		</Link>
	);
};

export default ShopProductCard;
