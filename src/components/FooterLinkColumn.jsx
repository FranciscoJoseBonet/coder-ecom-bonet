import FooterItem from "./FooterItem";

const FooterLinkColumn = ({ title = "", LinkObj = {} }) => {
	console.log(LinkObj);
	return (
		<div className="col-lg-2 col-md-6 col-6">
			<h5 className="mb-3">{title}</h5>
			{console.log("LinkObj: ", LinkObj)}
			<ul className="list-unstyled">
				{Object.keys(LinkObj).map((link) => {
					const value = LinkObj[link];
					console.log("value: ", value);
					return <FooterItem key={link} item={value} pathEnd={link} />;
				})}
			</ul>
		</div>
	);
};

export default FooterLinkColumn;
