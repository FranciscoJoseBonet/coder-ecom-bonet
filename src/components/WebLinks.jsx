import { Link } from "react-router-dom";

const WebLinks = (props) => {
	return (
		<>
			<Link
				to={`${props.url}`}
				className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
				style={{ width: "40px", height: "40px" }}
			>
				{props.icon}
			</Link>
		</>
	);
};

export default WebLinks;
