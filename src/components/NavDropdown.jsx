import { Link } from "react-router-dom";

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
			<Link
				className="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Instruments
			</Link>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				{Object.keys(dropItems).map((item) => {
					const value = dropItems[item];
					return (
						<li key={value + " nav"}>
							<Link to={`/category/${item}`} className="dropdown-item">
								{value}
							</Link>
						</li>
					);
				})}
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li>
					<Link className="dropdown-item" to="/category/all">
						All Categories
					</Link>
				</li>
			</ul>
		</li>
	);
};

export default NavDropdown;
