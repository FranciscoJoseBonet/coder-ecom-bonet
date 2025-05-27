import { Link } from "react-router-dom";

const CallToAction = (props) => {
	return (
		<div className="col-md-6 py-1">
			<div className={`card border-0 bg-${props.col} text-white h-100`}>
				<div className="card-body p-3 d-flex flex-column justify-content-between">
					<h3 className="card-title">{props.title}</h3>
					<p className="card-text">{props.cardText}</p>
					<Link to={`${props.link}`} className="btn btn-outline-light mt-2">
						{props.buttonText}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
