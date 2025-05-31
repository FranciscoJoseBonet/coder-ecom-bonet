import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const contextValue = { cart };
	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
