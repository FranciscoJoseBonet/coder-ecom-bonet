import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget.jsx";

const NavbarIcons = () => (
	<div className="d-flex align-items-center">
		<Link to="/account" className="btn btn-link text-dark me-1 position-relative">
			<FaUser />
			<span className="d-none d-lg-inline ms-1">Account</span>
		</Link>
		<Link to="/cart" className="btn btn-link text-dark position-relative">
			<CartWidget />
			<span className="d-none d-lg-inline ms-1">Cart</span>
		</Link>
	</div>
);

export default NavbarIcons;
