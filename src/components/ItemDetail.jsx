import { Row, Col, Card, Badge } from "react-bootstrap";
import {
	FaStar,
	FaStarHalfAlt,
	FaRegStar,
	FaShieldAlt,
	FaTruck,
	FaUndo,
} from "react-icons/fa";
import ItemCount from "./ItemCount";
import { fCurrency } from "../utils/FormatCurrency";

const ItemDetail = ({ product }) => {
	const { name, description, price, image, stock, category, rating, reviews } = product;

	const renderStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar key={i} className="text-warning" />);
		}

		if (hasHalfStar) {
			stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
		}

		const emptyStars = 5 - Math.ceil(rating);
		for (let i = 0; i < emptyStars; i++) {
			stars.push(<FaRegStar key={`empty-${i}`} className="text-warning" />);
		}

		return stars;
	};

	const handleAddToCart = (quantity) => {
		console.log(`Adding ${quantity} of ${name} to cart`);
		//funcion para agregar al carrito dsps
	};

	return (
		<Row className="g-4">
			{/* Foto */}
			<Col lg={6}>
				<Card className="border-0 shadow-sm" style={{ maxHeight: "80vh" }}>
					<Card.Img
						variant="top"
						src={image}
						alt={name}
						style={{
							maxHeight: "80vh",
							width: "100%",
							objectFit: "contain",
						}}
					/>
				</Card>
			</Col>

			{/* Detalles */}
			<Col lg={6}>
				<div className="h-100 d-flex flex-column">
					{/* Descripcion */}
					<Card className="border-0 bg-light mb-4">
						<Card.Body>
							{/* Nombre */}
							<div className="d-flex justify-content-between">
								<h1 className="title">{name}</h1>

								<Badge bg="light" text="dark" className="mb-3 align-self-start">
									{category}
								</Badge>
							</div>
							{/* el score */}
							<div className="d-flex align-items-center mb-3">
								<div className="me-2">{renderStars(rating)}</div>
								<span className="text-muted">
									{rating} ({reviews} reviews)
								</span>
							</div>

							{/* Precio */}
							<div className="mb-4">
								<span className="h3 fw-bold text-dark">{fCurrency(price)}</span>
							</div>

							<Card.Subtitle className="h5">Product Description</Card.Subtitle>
							<Card.Text className="text-muted">{description}</Card.Text>

							{/* ItemCount */}
							<div className="mt-auto">
								{stock > 0 && <ItemCount stock={stock} onAdd={handleAddToCart} />}
							</div>
						</Card.Body>
					</Card>

					{/* Paradarle realismo */}
					<Row className="text-center">
						<Col xs={4}>
							<div className="p-3">
								<FaTruck className="text-muted mb-2" size={24} />
								<p className="small text-muted mb-0">Free Shipping</p>
							</div>
						</Col>
						<Col xs={4}>
							<div className="p-3">
								<FaShieldAlt className="text-muted mb-2" size={24} />
								<p className="small text-muted mb-0">2 Year Warranty</p>
							</div>
						</Col>
						<Col xs={4}>
							<div className="p-3">
								<FaUndo className="text-muted mb-2" size={24} />
								<p className="small text-muted mb-0">30 Day Returns</p>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default ItemDetail;
