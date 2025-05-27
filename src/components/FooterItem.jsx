import { Link } from "react-router-dom";

const FooterItem = ({ item, pathEnd = "", type = "" }) => {
	return (
		<li className="mb-2">
			<Link to={`${type}/${pathEnd}`} className="text-decoration-none text-muted">
				{item}
			</Link>
		</li>
	);
};

export default FooterItem;
