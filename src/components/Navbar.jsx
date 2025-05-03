import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<h1>RbMusic</h1>
			</div>
			<ul className="navbar__links">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Inventory</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<CartWidget />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
