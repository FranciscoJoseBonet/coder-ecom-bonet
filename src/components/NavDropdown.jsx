import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCategories } from "../mock/AsyncService";

const NavDropdown = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategories()
			.then((data) => {
				setCategories(data);
			})
			.catch((error) => {
				console.error("Hubo un error al cargar los datos: ", error);
			});
	}, []);

	return (
		<li className="nav-item dropdown">
			<Link
				className="nav-link dropdown-toggle"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Categories
			</Link>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				{categories.map((categ) => {
					const label = categ.name;
					return (
						<li key={categ.id + "nav"}>
							<Link to={`/category/${categ.id}`} className="dropdown-item">
								{label}
							</Link>
						</li>
					);
				})}
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li>
					<Link className="dropdown-item" to="/shop">
						All Categories
					</Link>
				</li>
			</ul>
		</li>
	);
};

export default NavDropdown;
