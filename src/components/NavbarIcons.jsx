import { FaUser, FaShoppingCart } from "react-icons/fa";

const NavbarIcons = () => (
	<div className="d-flex align-items-center">
		<a href="/account" className="btn btn-link text-dark me-2">
			<FaUser />
			<span className="d-none d-lg-inline ms-1">Account</span>
		</a>
		<a href="/cart" className="btn btn-link text-dark position-relative">
			<FaShoppingCart />
			<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
				0
			</span>
			<span className="d-none d-lg-inline ms-1">Cart</span>
		</a>
	</div>
);

export default NavbarIcons;
