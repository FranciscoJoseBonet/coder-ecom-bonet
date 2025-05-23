import VoidCart from "../components/VoidCart.jsx";
import CartItem from "../components/CartItem.jsx";
import TotalSummary from "../components/TotalSummary.jsx";

// Sample cart items data (for display purposes only)
const sampleCartItems = [
	{
		id: 1,
		name: "Gibson Les Paul Standard",
		price: 2499.99,
		quantity: 1,
		image: "https://i.postimg.cc/GHLtXKKw/gibson.png",
	},
	{
		id: 2,
		name: "Yamaha P-125 Digital Piano",
		price: 649.99,
		quantity: 1,
		image: "https://i.postimg.cc/LhBhkwz3/yamaha.jpg",
	},
	{
		id: 3,
		name: "Fender American Professional II",
		price: 1699.99,
		quantity: 1,
		image: "https://http2.mlstatic.com/D_NQ_NP_734948-MLA70441977503_072023-O.webp",
	},
];

const CartPage = () => {
	let hasItems = true;
	let subtotal = 0;

	let tax = 0; // Porcentaje fijo con el cual se calcula el impuesto sobre el total de la compra
	let shipping = 0; // Ahora es fijo, en prox version se calcula en base a la distancia y el peso del envio

	let total = tax + shipping + subtotal;

	return (
		<div className="container py-5">
			<div className="row">
				{hasItems ? (
					<>
						<div className="col-lg-8 mb-4 mb-lg-0">
							<h1 className="mb-4">Shopping Cart</h1>
							<div className="d-none d-md-flex fw-bold text-muted mb-3 px-4">
								<div className="col-md-6">Product</div>
								<div className="col-md-2 text-center">Quantity</div>
								<div className="col-md-3 text-center">Price</div>
								<div className="col-md-1 text-end">Remove</div>
							</div>

							{sampleCartItems.map((item) => (
								<CartItem key={item.id} item={item} />
							))}
						</div>
						<div className="col-lg-4">
							{<TotalSummary subtotal={subtotal} tax={tax} shipping={shipping} />}
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
