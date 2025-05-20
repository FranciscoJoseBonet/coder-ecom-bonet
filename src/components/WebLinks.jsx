const WebLinks = (props) => {
	return (
		<>
			<a
				href={`${props.url}`}
				className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
				style={{ width: "40px", height: "40px" }}
			>
				{props.icon}
			</a>
		</>
	);
};

export default WebLinks;
