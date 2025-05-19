import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import Logo from "./Logo";
import WebLinks from "./WebLinks";
import FooterLinkColumn from "./FooterLinkColumn";

const Footer = () => {
	const shopLinks = {
		guitars: "Guitars",
		keyboards: "Keyboards",
		drums: "Drums",
		winds: "Wind Instruments",
		acc: "Accesories",
	};

	const SuppLinks = {
		contact: "Contact Us",
		faq: "FAQs",
		shipping: "Shipping Info",
		returns: "Returns & Exchanges",
		warranty: "Warranty",
	};

	return (
		<footer className="bg-light pt-5 pb-3">
			<div className="container">
				<div className="row g-4">
					{/* Primera columna */}
					<div className="col-lg-4 col-md-6">
						<div className="mb-4">
							<Logo />
							<p className="text-muted">
								Premium musical instruments for professionals and enthusiasts. Quality
								craftsmanship since 2005.
							</p>
							<div className="d-flex gap-2 mt-3">
								<WebLinks />
							</div>
						</div>
					</div>

					{/* Segunda Columna */}
					<FooterLinkColumn title="Shop" LinkObj={shopLinks} />

					{/* Tercera Columna */}
					<FooterLinkColumn title="Support" LinkObj={SuppLinks} />

					{/* Cuarta Columna */}
					<div className="col-lg-4 col-md-6">
						<h5 className="mb-3">Stay Updated</h5>
						<p className="text-muted mb-3">
							Subscribe to our newsletter for new arrivals, promotions, and expert tips.
						</p>
						<form className="mb-3">
							<div className="input-group">
								<input
									type="email"
									className="form-control"
									placeholder="Your email address"
									aria-label="Email"
								/>
								<button className="btn btn-dark" type="submit">
									<FaEnvelope className="me-1" /> Subscribe
								</button>
							</div>
						</form>
						<div className="text-muted">
							<div className="d-flex align-items-center mb-2">
								<FaPhone className="me-2" />
								<span>+1 (555) 123-4567</span>
							</div>
							<div className="d-flex align-items-center">
								<FaMapMarkerAlt className="me-2" />
								<span>123 Music Street, Harmony City, HC 10101</span>
							</div>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				{/* Bottom Footer */}
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start">
						<p className="text-muted mb-md-0">
							&copy; {new Date().getFullYear()} RbMusic. All rights reserved.
						</p>
					</div>
					<div className="col-md-6">
						<ul className="list-inline text-center text-md-end mb-0">
							<li className="list-inline-item">
								<a href="/privacy" className="text-decoration-none text-muted small">
									Privacy Policy
								</a>
							</li>
							<li className="list-inline-item">
								<span className="text-muted mx-2">|</span>
							</li>
							<li className="list-inline-item">
								<a href="/terms" className="text-decoration-none text-muted small">
									Terms of Service
								</a>
							</li>
							<li className="list-inline-item">
								<span className="text-muted mx-2">|</span>
							</li>
							<li className="list-inline-item">
								<a href="/sitemap" className="text-decoration-none text-muted small">
									Sitemap
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
