import { useState, useContext } from "react";
import { Container, Row, Card, Form, Button } from "react-bootstrap";
import { FaLock, FaShieldAlt } from "react-icons/fa";

import FormShippingFields from "../components/FormShippingFields.jsx";
import FormClientFields from "../components/FormClientFields.jsx";
import FormBillingFields from "../components/FormBillingFields.jsx";
import FormCardFields from "../components/FormCardFileds.jsx";

import { CartContext } from "../context/CartContext.jsx";

import TotalSummary from "../components/TotalSummary.jsx";

const Checkout = () => {
	const { cart, isCartVoid, finalPrice } = useContext(CartContext);
	const [buyer, setBuyer] = useState();

	const [formData, setFormData] = useState({
		// informacino del Cliente
		firstName: "",
		lastName: "",
		email: "",
		phone: "",

		// Informacion de envio
		shippingAddress: "",
		shippingCity: "",
		shippingProvince: "",
		shippingPostal: "",
		shippingCountry: "Argentina",

		// Informacion para la factuera
		billingAddress: "",
		billingCity: "",
		billingProvince: "",
		billingPostal: "",
		billingCountry: "Argentina",
		sameAsShipping: true,

		// Informacion para el pago
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		cardName: "",

		// Extras (subscripcion al newsletter y si hay instrucciones extra para la entrega)
		specialInstructions: "",
		newsletter: false,
	});

	const [errors, setErrors] = useState({});
	const [isProcessing, setIsProcessing] = useState(false);

	const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const taxPercentage = 0.21;
	const shipping = 16000;

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Limpia el error cuando el usuario arranca a escribir
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);

		// Simulacion del proceso de compra
		setTimeout(() => {
			setIsProcessing(false);
			const orderData = { ...formData, cart: cart, total: finalPrice() };
			setBuyer(orderData);
			console.log("Order submitted:", orderData);
		}, 2000);
	};

	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<div className="text-center mb-5">
					<h1 className="h2 fw-bold mb-2">Secure Checkout</h1>
					<p className="text-muted">Complete your purchase securely :D</p>
				</div>

				<div className="center">
					<Form onSubmit={handleSubmit}>
						<Row className="g-4">
							<>
								{/* Informacion del cliente */}
								<FormClientFields
									formData={formData}
									handleInputChange={handleInputChange}
								/>

								{/* Info del envio */}
								<FormShippingFields
									formData={formData}
									handleInputChange={handleInputChange}
								/>

								{/* Informacion para la factura */}
								<FormBillingFields
									formData={formData}
									handleInputChange={handleInputChange}
								/>

								{/* Informacion del Pago */}
								<FormCardFields
									formData={formData}
									handleInputChange={handleInputChange}
								/>
								{/* Extras */}
								<Card className="border-0 shadow-sm mb-4">
									<Card.Body className="p-4">
										<h4 className="mb-3">Additional Options</h4>

										<Form.Group className="mb-3">
											<Form.Label>Special Instructions</Form.Label>
											<Form.Control
												as="textarea"
												rows={3}
												name="specialInstructions"
												value={formData.specialInstructions}
												onChange={handleInputChange}
												placeholder="Any special delivery instructions or notes..."
											/>
										</Form.Group>

										<Form.Check
											type="checkbox"
											name="newsletter"
											checked={formData.newsletter}
											onChange={handleInputChange}
											label="Subscribe to our newsletter for exclusive deals and new arrivals"
										/>
									</Card.Body>
								</Card>
							</>

							<div className="d-flex gap-3 flex-column">
								{/* Resumen de la compra */}
								<div className="col-lg-12">
									<TotalSummary
										subtotal={subtotal}
										taxPercentage={taxPercentage}
										shipping={shipping}
										btn={false}
									/>
								</div>
								{/* Boton para finalizar la orden */}
								<Button
									type="submit"
									variant="dark"
									size="lg"
									className="w-100"
									disabled={isProcessing}
								>
									{isProcessing ? (
										<>
											<span
												className="spinner-border spinner-border-sm me-2"
												role="status"
											/>
											Processing...
										</>
									) : (
										<>
											<FaLock className="me-2" />
											Place Order
										</>
									)}
								</Button>

								<div className="text-center mt-3">
									<small className="text-muted">
										<FaShieldAlt className="me-1" />
										Secure 256-bit SSL encryption
									</small>
								</div>
							</div>
						</Row>
					</Form>
				</div>
			</Row>
		</Container>
	);
};
export default Checkout;
