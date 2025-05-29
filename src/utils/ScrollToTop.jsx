import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]); // Cada vez que cambia la locacion pathname se sube la pantalla hasata arriba

	return null;
};

export default ScrollToTop;
