const FooterItem = ({ item, pathEnd }) => {
	return (
		<li className="mb-2">
			<a href={`/category/${pathEnd}`} className="text-decoration-none text-muted">
				{item}
			</a>
		</li>
	);
};

export default FooterItem;
