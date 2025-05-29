import { Link } from "react-router-dom";

const HeroSection = ({ title = "", subtitle = "", imgPath = "" }) => {
	return (
		<div className="row align-items-center">
			<div className="col-lg-6 mb-5 mb-lg-0">
				<h1 className="display-4 fw-bold mb-3">{title}</h1>
				<p className="lead text-muted mb-4">{subtitle}</p>
				<div className="d-flex gap-3 d-flex justify-content-center">
					<Link to="/shop" className="btn btn-dark btn-lg px-4 py-2 w-100">
						Shop Now
					</Link>
					<Link to="/about" className="btn btn-outline-dark btn-lg px-4 py-2 w-100">
						Learn More
					</Link>
				</div>
			</div>
			<div className="col-lg-6">
				<img src={imgPath} alt="Hero Image" className="img-fluid rounded shadow" />
			</div>
		</div>
	);
};

export default HeroSection;
