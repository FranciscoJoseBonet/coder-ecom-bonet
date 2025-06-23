import { Link } from "react-router-dom";
import { iconMap } from "../utils/iconMap";

const WebLinks = (props) => {
	let Icon = iconMap[props.icon];

	return (
		<>
			<Link
				to={props.url}
				className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
				style={{ width: "40px", height: "40px" }}
			>
				{Icon && <Icon />}
			</Link>
		</>
	);
};
export default WebLinks;
