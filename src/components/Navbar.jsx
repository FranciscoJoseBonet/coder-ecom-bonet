import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import Logo from "./Logo.jsx";
import SearchForm from "./SearchForm";
import NavbarIcons from "./NavbarIcons";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isOpen) {
			setIsOpen(false);
		}
	}, [location]);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
			<div className="container">
				<Logo />

				{/* Toggler para el diseño responsive */}
				<button
					className="navbar-toggler border-0"
					type="button"
					onClick={toggleMenu}
					aria-expanded={isOpen ? "true" : "false"}
					aria-label="Toggle navigation"
				>
					<FaBars />
				</button>

				<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<NavItem href="/" label="Home" />
						<NavItem href="/shop" label="Shop" />
						<NavDropdown />
					</ul>

					<SearchForm />
					<NavbarIcons />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
