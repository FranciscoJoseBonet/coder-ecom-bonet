import VoidCart from "../components/VoidCart.jsx";
import CartItem from "../components/CartItem.jsx";
import TotalSummary from "../components/TotalSummary.jsx";

import { useEffect, useState } from "react";
import { fetchProducts } from "../mock/AsyncService.jsx";

const CartPage = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				const sample = data.slice(0, 3);
				setCartItems(sample);
			})
			.catch((error) => {
				console.error("No se pudo resolver el pedido de los productos: ", error);
			});
	}, [cartItems]);

	const updateItemQuantity = (id, newQuantity) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	const hasItems = cartItems.length > 0;
	const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const taxPercentage = 0.21;
	const shipping = hasItems ? 6000 : 0;

	return (
		<div className="container py-5">
			<div className="row">
				{hasItems ? (
					<>
						<div className="col-lg-8 mb-4 mb-lg-0">
							<h1 className="mb-4 text-lg-start text-md-start text-center">
								Shopping Cart
							</h1>
							<div className="d-none d-md-flex fw-bold text-muted mb-3 px-4">
								<div className="col-md-6">Product</div>
								<div className="col-md-2 text-center">Quantity</div>
								<div className="col-md-3 text-center">Price</div>
								<div className="col-md-1 text-end">Remove</div>
							</div>

							{cartItems.map((item) => (
								<CartItem
									key={item.id}
									item={item}
									onQuantityChange={updateItemQuantity}
								/>
							))}
						</div>
						<div className="col-lg-4">
							<TotalSummary
								subtotal={subtotal}
								taxPercentage={taxPercentage}
								shipping={shipping}
							/>
						</div>
					</>
				) : (
					<VoidCart />
				)}
			</div>
		</div>
	);
};

export default CartPage;
