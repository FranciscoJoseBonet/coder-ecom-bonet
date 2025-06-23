import { FaCreditCard, FaLock, FaShieldAlt } from "react-icons/fa";
import { Card, Row, Col, Form, Alert, InputGroup } from "react-bootstrap";

const FormCardFields = ({ handleInputChange, formData }) => {
	return (
		<Card className="border-0 shadow-sm mb-4">
			<Card.Body className="p-4">
				<div className="d-flex align-items-center mb-3">
					<FaCreditCard className="text-muted me-2" />
					<h4 className="mb-0">Payment Information</h4>
					<FaLock className="text-success ms-auto" />
				</div>

				<Alert variant="light" className="d-flex align-items-center mb-3">
					<FaShieldAlt className="text-success me-2" />
					<small>Your payment information is encrypted and secure</small>
				</Alert>

				<Row className="g-3">
					<Col xs={12}>
						<Form.Group>
							<Form.Label>Cardholder Name *</Form.Label>
							<Form.Control
								type="text"
								name="cardName"
								value={formData.cardName}
								onChange={handleInputChange}
								required
								placeholder="Name as it appears on card"
							/>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group>
							<Form.Label>Card Number *</Form.Label>
							<InputGroup>
								<Form.Control
									type="text"
									name="cardNumber"
									value={formData.cardNumber}
									onChange={handleInputChange}
									required
									placeholder="1234 5678 9012 3456"
									maxLength={19}
								/>
								<InputGroup.Text>
									<FaCreditCard className="text-muted" />
								</InputGroup.Text>
							</InputGroup>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Label>Expiry Date *</Form.Label>
							<Form.Control
								type="text"
								name="expiryDate"
								value={formData.expiryDate}
								onChange={handleInputChange}
								required
								placeholder="MM/YY"
								maxLength={5}
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Label>CVV *</Form.Label>
							<Form.Control
								type="text"
								name="cvv"
								value={formData.cvv}
								onChange={handleInputChange}
								required
								placeholder="123"
								maxLength={4}
							/>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};
export default FormCardFields;
