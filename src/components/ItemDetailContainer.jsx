import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { fetchProducts } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadProduct = async () => {
			try {
				setLoading(true);
				setError(null);

				const products = await fetchProducts();
				const selectedProduct = products.find((product) => product.id === itemId); // Filtro por id para carga dinamica

				if (selectedProduct) {
					setProduct(selectedProduct);
				} else {
					setError("Producto eliminado o no encontrado");
				}
			} catch (error) {
				setError("Error al caragar el producto, intentelo de nuevo mas tarde");
				console.error("Error cargando los productos:", error);
			} finally {
				setLoading(false);
			}
		};

		if (itemId) {
			loadProduct();
		}
	}, [itemId]);

	if (loading) {
		// Mi primer spinner de carga :))))))
		return (
			<Container className="py-5">
				<Row className="justify-content-center">
					<Col xs="auto">
						<div className="text-center">
							<Spinner animation="border" role="status" variant="dark">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
							<p className="mt-3 text-muted">Loading product details...</p>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}

	if (error) {
		return (
			<Container className="py-5">
				<Row className="justify-content-center">
					<Col md={6}>
						<Alert variant="danger" className="text-center">
							<Alert.Heading>Oops! Something went wrong</Alert.Heading>
							<p>{error}</p>
						</Alert>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container className="py-5">
			<ItemDetail product={product} />
		</Container>
	);
};

export default ItemDetailContainer;
