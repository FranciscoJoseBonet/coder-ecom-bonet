import { Row, Col, Alert, Container } from "react-bootstrap";

const FetchError = ({ error }) => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col md={6}>
					<Alert variant="danger" className="text-center">
						<Alert.Heading>Oops! Something went wrong</Alert.Heading>
						<p>{error || "Producto no encontrado"}</p>
					</Alert>
				</Col>
			</Row>
		</Container>
	);
};

export default FetchError;
