import { useState, useContext } from "react";
import { Container, Row, Card, Form, Button } from "react-bootstrap";
import { FaLock, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase.jsx";

import FormShippingFields from "../components/FormShippingFields.jsx";
import FormClientFields from "../components/FormClientFields.jsx";
import FormBillingFields from "../components/FormBillingFields.jsx";
import FormCardFields from "../components/FormCardFileds.jsx";

import { CartContext } from "../context/CartContext.jsx";

import TotalSummary from "../components/TotalSummary.jsx";

const Checkout = () => {
	const { cart, isCartVoid, finalPrice, clear } = useContext(CartContext);
	const [orderId, setOrderId] = useState();
	const [errors, setErrors] = useState({});
	const [isProcessing, setIsProcessing] = useState(false);

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

			const orderData = {
				buyer: { ...formData },
				cart: cart,
				total: finalPrice(),
				date: serverTimestamp(),
			};

			const ventas = collection(db, "orders");

			addDoc(ventas, orderData)
				.then((res) => {
					setOrderId(res.id);
					setFormData({
						firstName: "",
						lastName: "",
						email: "",
						phone: "",
						shippingAddress: "",
						shippingCity: "",
						shippingProvince: "",
						shippingPostal: "",
						billingAddress: "",
						billingCity: "",
						billingProvince: "",
						billingPostal: "",
						cardNumber: "",
						expiryDate: "",
						cvv: "",
						cardName: "",
						specialInstructions: "",
						newsletter: false,
					});
					setErrors({});
					clear();
				})
				.catch((error) => {
					console.error("Error creating order:", error);
					setErrors({
						general: "There was an error processing your order. Please try again.",
					});
				});
			console.log("Order submitted:", orderData);
		}, 2000);
	};

	return (
		<>
			{isCartVoid() ? (
				<Container className="py-5">
					<Row className="justify-content-center">
						<div className="text-center mb-5">
							<h1 className="h2 fw-bold mb-2">Your Cart is Empty</h1>
							<p className="text-muted">
								Please add items to your cart before proceeding to checkout.
							</p>
						</div>
					</Row>
				</Container>
			) : (
				<>
					{orderId ? (
						<Container className="py-5">
							<Row className="justify-content-center">
								<div className="text-center mb-5">
									<h1 className="h2 fw-bold mb-2">Order Confirmed!</h1>
									<p className="text-muted">
										Thank you for your purchase! Your order ID is: {orderId}
									</p>
								</div>
							</Row>
							<Row className="justify-content-center">
								<div className="col-lg-6">
									<Link to="/" className="text-decoration-none">
										<Button variant="dark" size="lg" className="w-100">
											Continue Shopping
										</Button>
									</Link>
								</div>
							</Row>
						</Container>
					) : (
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
					)}
				</>
			)}
		</>
	);
};
export default Checkout;
