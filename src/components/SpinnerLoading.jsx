import { Container, Row, Col, Spinner } from "react-bootstrap";

const SpinnerLoading = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col xs="auto">
					<div className="text-center">
						<Spinner animation="border" role="status" variant="dark">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
						<p className="mt-3 text-muted">Loading section...</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SpinnerLoading;
