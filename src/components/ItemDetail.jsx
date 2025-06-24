import { Row, Col, Card, Badge } from "react-bootstrap";
import { FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { fCurrency } from "../utils/FormatCurrency";

import ItemCount from "./ItemCount";
import StarsRender from "./StarsRender";

import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext);
	const navigate = useNavigate();

	const { name, description, price, image, stock, category, rating, reviews } = product;

	const handleOnAdd = (quantity) => {
		addItem(product, quantity);

		Swal.fire({
			title: "Product added to cart!",
			text: `${quantity} ${name} added`,
			width: 600,
			padding: "3em",
			color: "#716add",
			background: "#fff url(/images/trees.png)",
			backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `,
			showCancelButton: true,
			confirmButtonText: "Cart",
			cancelButtonText: "Continue Shopping",
			reverseButtons: true,
		}).then((result) => {
			if (result.isConfirmed) {
				navigate("/cart");
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				navigate("/");
			}
		});
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
