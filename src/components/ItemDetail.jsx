import { Row, Col, Card, Badge } from "react-bootstrap";
import { FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { useState, useContext } from "react";

import { fCurrency } from "../utils/FormatCurrency";

import ItemCount from "./ItemCount";
import StarsRender from "./StarsRender";

import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
	const { cart } = useContext(CartContext);
	console.log(cart);

	const [quant, setQuant] = useState(0);
	const { name, description, price, image, stock, category, rating, reviews } = product;

	const handleOnAdd = (quantity) => {
		setQuant(quantity);
		console.log(`Adding ${quantity} of ${name} to cart`);
		//funcion para agregar al carrito dsps
	};

	return (
		<Row className="g-4">
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
								<div className="me-2">{StarsRender(rating)}</div>
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
								{stock > 0 && <ItemCount stock={stock} onAdd={handleOnAdd} />}
							</div>
						</Card.Body>
					</Card>

					{/* Paradarle realismo XD*/}
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
