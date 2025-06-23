import { FaUser } from "react-icons/fa";
import { Card, Row, Col, Form } from "react-bootstrap";

const FormClientFields = ({ handleInputChange, formData }) => {
	return (
		<Card className="border-0 shadow-sm mb-4">
			<Card.Body className="p-4">
				<div className="d-flex align-items-center mb-3">
					<FaUser className="text-muted me-2" />
					<h4 className="mb-0">Customer Information</h4>
				</div>

				<Row className="g-3">
					<Col md={6}>
						<Form.Group>
							<Form.Label>First Name *</Form.Label>
							<Form.Control
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								required
								placeholder="Enter your first name"
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Label>Last Name *</Form.Label>
							<Form.Control
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								required
								placeholder="Enter your last name"
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Label>Email Address *</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								required
								placeholder="your@email.com"
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								placeholder="(555) 123-4567"
							/>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default FormClientFields;
