const Greeting = ({ category, text }) => {
	return (
		<div className="shop-header bg-white py-4 mb-4">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h1 className="mb-2">{category}</h1>
						<p className="text-muted mb-0">
							{text ||
								"Discover our exclusive collection of products tailored just for you."}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
