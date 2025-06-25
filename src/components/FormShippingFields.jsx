import { FaTruck } from "react-icons/fa";
import { Card, Row, Col, Form } from "react-bootstrap";

const FormShippingFields = ({ register, errors }) => {
	return (
		<Card className="border-0 shadow-sm mb-4">
			<Card.Body className="p-4">
				<div className="d-flex align-items-center mb-3">
					<FaTruck className="text-muted me-2" />
					<h4 className="mb-0">Shipping Address</h4>
				</div>

				<Row className="g-3">
					<Col xs={12}>
						<Form.Group>
							<Form.Label>Street Address *</Form.Label>
							<Form.Control
								type="text"
								placeholder="123 Main Street"
								{...register("shippingAddress", {
									required: "Street address is required",
								})}
								isInvalid={!!errors.shippingAddress}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.shippingAddress?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={6}>
						<Form.Group>
							<Form.Label>City *</Form.Label>
							<Form.Control
								type="text"
								placeholder="City"
								{...register("shippingCity", {
									required: "City is required",
								})}
								isInvalid={!!errors.shippingCity}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.shippingCity?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={3}>
						<Form.Group>
							<Form.Label>Province *</Form.Label>
							<Form.Select
								{...register("shippingProvince", {
									required: "Province is required",
								})}
								isInvalid={!!errors.shippingProvince}
							>
								<option value="">Select your province</option>
								<option value="CABA">CABA</option>
								<option value="BA">Buenos Aires</option>
								<option value="CAT">Catamarca</option>
								<option value="CHA">Chaco</option>
								<option value="CHU">Chubut</option>
								<option value="COR">Córdoba</option>
								<option value="CTES">Corrientes</option>
								<option value="ER">Entre Ríos</option>
								<option value="FOR">Formosa</option>
								<option value="JUJ">Jujuy</option>
								<option value="LP">La Pampa</option>
								<option value="LR">La Rioja</option>
								<option value="MZA">Mendoza</option>
								<option value="MIS">Misiones</option>
								<option value="NQN">Neuquén</option>
								<option value="RN">Río Negro</option>
								<option value="SA">Salta</option>
								<option value="SJ">San Juan</option>
								<option value="SL">San Luis</option>
								<option value="SC">Santa Cruz</option>
								<option value="SF">Santa Fe</option>
								<option value="SDE">Santiago del Estero</option>
								<option value="TF">Tierra del Fuego</option>
								<option value="TUC">Tucumán</option>
							</Form.Select>
							<Form.Control.Feedback type="invalid">
								{errors.shippingProvince?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col md={3}>
						<Form.Group>
							<Form.Label>Postal code *</Form.Label>
							<Form.Control
								type="text"
								placeholder="3016"
								{...register("shippingPostal", {
									required: "Postal code is required",
									pattern: {
										value: /^[0-9]{4}$/,
										message: "Postal code must be 4 digits",
									},
								})}
								isInvalid={!!errors.shippingPostal}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.shippingPostal?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default FormShippingFields;
