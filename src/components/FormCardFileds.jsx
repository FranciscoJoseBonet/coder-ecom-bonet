import { FaCreditCard, FaLock, FaShieldAlt } from "react-icons/fa";
import { Card, Row, Col, Form, Alert, InputGroup } from "react-bootstrap";

const FormCardFields = ({ register, errors }) => {
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
								placeholder="Name as it appears on card"
								{...register("cardName", {
									required: "Cardholder name is required",
								})}
								isInvalid={!!errors.cardName}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.cardName?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col xs={12}>
						<Form.Group>
							<Form.Label>Card Number *</Form.Label>
							<InputGroup>
								<Form.Control
									type="text"
									placeholder="1234 5678 9012 3456"
									inputMode="numeric"
									maxLength={19}
									{...register("cardNumber", {
										required: "Card number is required",
										pattern: {
											value: /^(\d{4} ?){4}$/,
											message: "Enter a valid card number",
										},
										onChange: (e) => {
											let value = e.target.value.replace(/\D/g, "");
											if (value.length > 16) value = value.slice(0, 16);

											const formatted = value.replace(/(.{4})/g, "$1 ").trim();

											e.target.value = formatted;
										},
									})}
									isInvalid={!!errors.cardNumber}
								/>
								<InputGroup.Text>
									<FaCreditCard className="text-muted" />
								</InputGroup.Text>
								<Form.Control.Feedback type="invalid">
									{errors.cardNumber?.message}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group>
							<Form.Label>Expiry Date *</Form.Label>
							<Form.Control
								type="text"
								placeholder="MM/YY"
								maxLength={5}
								{...register("expiryDate", {
									required: "Expiry date is required",
									pattern: {
										value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
										message: "Enter a valid date (MM/YY)",
									},
									onChange: (e) => {
										let value = e.target.value.replace(/\D/g, ""); // solo números

										if (value.length >= 3) {
											value = value.slice(0, 4); // 4 digitos como maximo
											value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
										} else {
											value = value;
										}

										e.target.value = value;
									},
								})}
								isInvalid={!!errors.expiryDate}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.expiryDate?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group>
							<Form.Label>CVV *</Form.Label>
							<Form.Control
								type="text"
								placeholder="123"
								maxLength={3}
								{...register("cvv", {
									required: "CVV is required",
									pattern: {
										value: /^[0-9]{3}$/,
										message: "Enter a valid CVV",
									},
								})}
								isInvalid={!!errors.cvv}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.cvv?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default FormCardFields;
