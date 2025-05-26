import { Link } from "react-router-dom";

const NavItem = ({ href, label }) => (
	<li className="nav-item">
		<Link className="nav-link" to={href}>
			{label}
		</Link>
	</li>
);

export default NavItem;
