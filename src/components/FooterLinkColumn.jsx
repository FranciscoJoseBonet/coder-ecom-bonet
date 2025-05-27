import FooterItem from "./FooterItem";

const FooterLinkColumn = ({ title = "", LinkObj = {}, _type = "" }) => {
	return (
		<div className="col-lg-2 col-md-6 col-6">
			<h5 className="mb-3">{title}</h5>
			<ul className="list-unstyled">
				{LinkObj.map((categ) => {
					const value = categ.name;
					return (
						<FooterItem
							key={categ.id + "footer"}
							item={value}
							pathEnd={categ.id}
							type={_type}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default FooterLinkColumn;
