import { FaUser } from "react-icons/fa";
import { Card, Row, Col, Form } from "react-bootstrap";

const FormClientFields = ({ register, errors }) => {
	return (
		<Card className="border-0 shadow-sm mb-4">
			<Card.Body className="p-4">
				<div className="d-flex align-items-center mb-3">
					<FaUser className="text-muted me-2" />
					<h4 className="mb-0">Customer Information</h4>
				</div>

				<Row className="g-3">
					<Col md={6}>
						<Form.Group controlId="firstName">
							<Form.Label>First Name *</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your first name"
								isInvalid={!!errors.firstName}
								{...register("firstName", {
									required: "First name is required",
									minLength: {
										value: 2,
										message: "Must be at least 2 characters",
									},
									maxLength: {
										value: 20,
										message: "Must be 20 characters or less",
									},
								})}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.firstName?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group controlId="lastName">
							<Form.Label>Last Name *</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your last name"
								isInvalid={!!errors.lastName}
								{...register("lastName", {
									required: "Last name is required",
									minLength: {
										value: 2,
										message: "Must be at least 2 characters",
									},
								})}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.lastName?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group controlId="email">
							<Form.Label>Email Address *</Form.Label>
							<Form.Control
								type="email"
								placeholder="your@email.com"
								isInvalid={!!errors.email}
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
										message: "Invalid email format, it must be like: example@domain.com",
									},
								})}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.email?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group controlId="phone">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="tel"
								placeholder="123 - 456 3223"
								inputMode="numeric"
								maxLength={14}
								{...register("phone", {
									required: "Phone number is required",
									pattern: {
										value: /^\d{3} - \d{3} \d{4}$/,
										message: "Enter a valid phone number",
									},
									onChange: (e) => {
										let value = e.target.value.replace(/\D/g, ""); // Solo números

										if (value.length > 10) value = value.slice(0, 10); // Máx 10 dígitos

										let formatted = value;
										if (value.length > 6) {
											formatted = `${value.slice(0, 3)} - ${value.slice(
												3,
												6
											)} ${value.slice(6)}`;
										} else if (value.length > 3) {
											formatted = `${value.slice(0, 3)} - ${value.slice(3)}`;
										}

										e.target.value = formatted;
									},
								})}
								isInvalid={!!errors.phone}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.phone?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default FormClientFields;
