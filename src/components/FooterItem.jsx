import { Link } from "react-router-dom";

const FooterItem = ({ item, pathEnd }) => {
	return (
		<li className="mb-2">
			<Link to={`/category/${pathEnd}`} className="text-decoration-none text-muted">
				{item}
			</Link>
		</li>
	);
};

export default FooterItem;
