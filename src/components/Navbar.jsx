"use client";

import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaGuitar } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
			<div className="container">
				{/* Logo */}
				<a className="navbar-brand d-flex align-items-center" href="/">
					<FaGuitar className="me-2" />
					<span className="fw-bold">RbMusic</span>
				</a>

				{/* Mobile Toggle */}
				<button
					className="navbar-toggler border-0"
					type="button"
					onClick={toggleMenu}
					aria-expanded={isOpen ? "true" : "false"}
					aria-label="Toggle navigation"
				>
					<FaBars />
				</button>

				{/* Navigation Items */}
				<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Home
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Instruments
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="/category/guitars">
										Guitars
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/category/pianos">
										Pianos & Keyboards
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/category/drums">
										Drums & Percussion
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/category/wind">
										Wind Instruments
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="/categories">
										All Categories
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/deals">
								Deals
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">
								Contact
							</a>
						</li>
					</ul>

					{/* Search Form */}
					<form className="d-flex me-2 my-2 my-lg-0 position-relative">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search instruments..."
							aria-label="Search"
						/>
						<button className="btn position-absolute end-0 top-0 bottom-0" type="submit">
							<FaSearch />
						</button>
					</form>

					{/* Icons */}
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
