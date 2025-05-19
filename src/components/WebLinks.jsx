import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const WebLinks = () => {
	return (
		<>
			<a href="#" className="btn btn-sm btn-outline-dark rounded-circle">
				<FaFacebook />
			</a>
			<a href="#" className="btn btn-sm btn-outline-dark rounded-circle">
				<FaTwitter />
			</a>
			<a href="#" className="btn btn-sm btn-outline-dark rounded-circle">
				<FaInstagram />
			</a>
			<a href="#" className="btn btn-sm btn-outline-dark rounded-circle">
				<FaYoutube />
			</a>
		</>
	);
};

export default WebLinks;
