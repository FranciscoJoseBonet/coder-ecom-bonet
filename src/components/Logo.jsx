import { FaGuitar } from "react-icons/fa";

const Logo = () => {
	return (
		<a className="navbar-brand d-flex align-items-center" href="/">
			<FaGuitar className="me-2" />
			<span className="fw-bold">RbMusic</span>
		</a>
	);
};

export default Logo;
