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

import { useForm } from "react-hook-form";

const Checkout = () => {
	const { cart, isCartVoid, finalPrice, clear } = useContext(CartContext);
	const [orderId, setOrderId] = useState();
	const [isProcessing, setIsProcessing] = useState(false);
	const [sameAsShipping, setSameAsShipping] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onBlur",
	});

	const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const taxPercentage = 0.21;
	const shipping = 16000;

	const finishCheckout = async (data) => {
		setIsProcessing(true);

		const buyer = sameAsShipping
			? {
					...data,
					billingAddress: data.shippingAddress,
					billingCity: data.shippingCity,
					billingProvince: data.shippingProvince,
					billingPostal: data.shippingPostal,
			  }
			: { ...data };

		const orderData = {
			buyer,
			cart,
			total: finalPrice(),
			date: serverTimestamp(),
		};

		try {
			const ventas = collection(db, "orders");
			const res = await addDoc(ventas, orderData);
			setOrderId(res.id);
			reset(); // Limpia el formulario
			clear(); // Limpia el carrito
		} catch (error) {
			console.error("Error creating order:", error);
		} finally {
			setIsProcessing(false);
			console.log("Order submitted:", orderData);
		}
	};

	return (
		<>
			{isCartVoid() && !orderId ? (
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
			) : orderId ? (
				<Container className="py-5">
					<Row className="justify-content-center">
						<div className="text-center mb-5 mt-5">
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
							<Form onSubmit={handleSubmit(finishCheckout)}>
								<Row className="g-4">
									<>
										<FormClientFields register={register} errors={errors} />
										<FormShippingFields register={register} errors={errors} />
										<FormBillingFields
											register={register}
											errors={errors}
											sameAsShipping={sameAsShipping}
											setSameAsShipping={setSameAsShipping}
										/>
										<FormCardFields register={register} errors={errors} />

										<Card className="border-0 shadow-sm mb-4">
											<Card.Body className="p-4">
												<h4 className="mb-3">Additional Options</h4>

												<Form.Group className="mb-3" controlId="specialInstructions">
													<Form.Label>Special Instructions</Form.Label>
													<Form.Control
														as="textarea"
														rows={3}
														placeholder="Any special delivery instructions or notes..."
														{...register("specialInstructions")}
													/>
												</Form.Group>

												<Form.Check
													type="checkbox"
													label="Subscribe to our newsletter for exclusive deals and new arrivals"
													id="newsletter"
													{...register("newsletter")}
												/>
											</Card.Body>
										</Card>
									</>

									<div className="d-flex gap-3 flex-column">
										<div className="col-lg-12">
											<TotalSummary
												subtotal={subtotal}
												taxPercentage={taxPercentage}
												shipping={shipping}
												btn={false}
											/>
										</div>

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
	);
};

export default Checkout;
