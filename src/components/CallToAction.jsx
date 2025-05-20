const CallToAction = (props) => {
	return (
		<div className="col-md-6">
			<div className={`card border-0 bg-${props.col} text-white h-100`}>
				<div className="card-body p-4 d-flex flex-column justify-content-between">
					<h3 className="card-title">{props.title}</h3>
					<p className="card-text">{props.cardText}</p>
					<a href="/special-offers" className="btn btn-outline-light mt-2">
						{props.buttonText}
					</a>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
