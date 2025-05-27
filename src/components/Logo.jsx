import { FaGuitar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link className="navbar-brand d-flex align-items-center" to="/">
			<FaGuitar className="me-2" />
			<span className="fw-bold">RbMusic</span>
		</Link>
	);
};

export default Logo;
