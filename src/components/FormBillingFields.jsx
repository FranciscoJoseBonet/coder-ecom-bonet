import { FaMapMarkerAlt } from "react-icons/fa";
import { Card, Row, Col, Form } from "react-bootstrap";

const FormBillingFields = ({ register, errors, sameAsShipping, setSameAsShipping }) => {
	return (
		<Card className="border-0 shadow-sm mb-4">
			<Card.Body className="p-4">
				<div className="d-flex align-items-center justify-content-between mb-3">
					<div className="d-flex align-items-center">
						<FaMapMarkerAlt className="text-muted me-2" />
						<h4 className="mb-0">Billing Address</h4>
					</div>
					<Form.Check
						type="checkbox"
						label="Same as shipping"
						id="sameAsShipping"
						checked={sameAsShipping}
						onChange={() => setSameAsShipping(!sameAsShipping)}
					/>
				</div>

				{!sameAsShipping && (
					<Row className="g-3">
						<Col xs={12}>
							<Form.Group>
								<Form.Label>Street Address *</Form.Label>
								<Form.Control
									type="text"
									placeholder="123 Main Street"
									{...register("billingAddress", {
										required: "Street address is required",
									})}
									isInvalid={!!errors.billingAddress}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.billingAddress?.message}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>

						<Col md={6}>
							<Form.Group>
								<Form.Label>City *</Form.Label>
								<Form.Control
									type="text"
									placeholder="City"
									{...register("billingCity", {
										required: "City is required",
									})}
									isInvalid={!!errors.billingCity}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.billingCity?.message}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>

						<Col md={3}>
							<Form.Group>
								<Form.Label>Province *</Form.Label>
								<Form.Select
									{...register("billingProvince", {
										required: "Province is required",
									})}
									isInvalid={!!errors.billingProvince}
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
									{errors.billingProvince?.message}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>

						<Col md={3}>
							<Form.Group>
								<Form.Label>Postal Code *</Form.Label>
								<Form.Control
									type="text"
									placeholder="12345"
									{...register("billingPostal", {
										required: "Postal code is required",
										pattern: {
											value: /^[0-9]{4,5}$/,
											message: "Postal code must be 4-5 digits",
										},
									})}
									isInvalid={!!errors.billingPostal}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.billingPostal?.message}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
				)}
			</Card.Body>
		</Card>
	);
};

export default FormBillingFields;
