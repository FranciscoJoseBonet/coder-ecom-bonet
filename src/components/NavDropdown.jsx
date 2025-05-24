const NavDropdown = () => {
	const dropItems = {
		guitars: "Guitars",
		keyboards: "keyboards",
		drums: "Drums",
		winds: "wind instruments",
		acc: "Accesories",
	};
	return (
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
				{Object.keys(dropItems).map((item) => {
					const value = dropItems[item];
					return (
						<li key={value + " nav"}>
							<a href={`/category/${item}`} className="dropdown-item">
								{value}
							</a>
						</li>
					);
				})}
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li>
					<a className="dropdown-item" href="/category/all">
						All Categories
					</a>
				</li>
			</ul>
		</li>
	);
};

export default NavDropdown;
