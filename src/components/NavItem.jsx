import { NavLink } from "react-router-dom";

const NavItem = ({ href, label }) => (
	<li className="nav-item">
		<NavLink className="nav-link" to={href}>
			{label}
		</NavLink>
	</li>
);

export default NavItem;
