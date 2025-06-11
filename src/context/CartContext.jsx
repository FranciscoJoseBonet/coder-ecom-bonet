import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quant) => {
		if (isInCart(item.id)) {
			const updatedCart = cart.map((prod) => {
				if (prod.id === item.id) {
					return { ...prod, quantity: prod.quantity + quant };
				} else {
					return prod;
				}
			});
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...item, quantity: quant }]);
		}
	};

	const clear = () => {
		setCart([]);
	};

	const removeItem = (id) => {
		setCart(cart.filter((prod) => prod.id !== id));
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const isCartVoid = () => {
		return Number(cart.length) === 0;
	};

	const cartLen = () => {
		return cart.reduce((acc, item) => acc + item.quantity, 0);
	};

	const contextValue = {
		cart,
		addItem,
		clear,
		removeItem,
		isInCart,
		isCartVoid,
		cartLen,
	};
	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
