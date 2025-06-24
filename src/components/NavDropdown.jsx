import { NavLink } from "react-router-dom";
import { fetchCategories } from "../service/firestore/fetchCategories";
import useFilteredFetch from "../utils/useFilteredFetch";

const NavDropdown = () => {
	const { data: categoriesArr } = useFilteredFetch(fetchCategories);

	return (
		<li className="nav-item dropdown">
			<NavLink
				className="nav-link dropdown-toggle"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Categories
			</NavLink>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				{categoriesArr.map((categ) => {
					const label = categ.name;
					return (
						<li key={categ.id + "nav"}>
							<NavLink to={`/category/${categ.id}`} className="dropdown-item">
								{label}
							</NavLink>
						</li>
					);
				})}
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li>
					<NavLink className="dropdown-item" to="/shop">
						All Categories
					</NavLink>
				</li>
			</ul>
		</li>
	);
};

export default NavDropdown;
