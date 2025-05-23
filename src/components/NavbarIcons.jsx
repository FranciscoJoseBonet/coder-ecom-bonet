import { FaUser } from "react-icons/fa";
import CartWidget from "./CartWidget.jsx";

const NavbarIcons = () => (
	<div className="d-flex align-items-center">
		<a href="/account" className="btn btn-link text-dark me-1 position-relative">
			<FaUser />
			<span className="d-none d-lg-inline ms-1">Account</span>
		</a>
		<a href="/cart" className="btn btn-link text-dark position-relative">
			<CartWidget />
			<span className="d-none d-lg-inline ms-1">Cart</span>
		</a>
	</div>
);

export default NavbarIcons;
