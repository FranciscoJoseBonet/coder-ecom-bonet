const NavDropdown = () => (
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
);

export default NavDropdown;
