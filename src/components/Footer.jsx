import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaGuitar,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-light pt-5 pb-3">
			<div className="container">
				<div className="row g-4">
					{/* Company Info */}
					<div className="col-lg-4 col-md-6">
						<div className="mb-4">
							<a
								className="d-flex align-items-center text-decoration-none text-dark mb-3"
								href="/"
							>
								<FaGuitar className="me-2" size={24} />
								<span className="h4 mb-0 fw-bold">RbMusic</span>
							</a>
							<p className="text-muted">
								Premium musical instruments for professionals and enthusiasts. Quality
								craftsmanship since 2005.
							</p>
							<div className="d-flex gap-2 mt-3">
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
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="col-lg-2 col-md-6 col-6">
						<h5 className="mb-3">Shop</h5>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a href="/category/guitars" className="text-decoration-none text-muted">
									Guitars
								</a>
							</li>
							<li className="mb-2">
								<a href="/category/pianos" className="text-decoration-none text-muted">
									Pianos & Keyboards
								</a>
							</li>
							<li className="mb-2">
								<a href="/category/drums" className="text-decoration-none text-muted">
									Drums & Percussion
								</a>
							</li>
							<li className="mb-2">
								<a href="/category/wind" className="text-decoration-none text-muted">
									Wind Instruments
								</a>
							</li>
							<li className="mb-2">
								<a
									href="/category/accessories"
									className="text-decoration-none text-muted"
								>
									Accessories
								</a>
							</li>
						</ul>
					</div>

					{/* Support Links */}
					<div className="col-lg-2 col-md-6 col-6">
						<h5 className="mb-3">Support</h5>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a href="/contact" className="text-decoration-none text-muted">
									Contact Us
								</a>
							</li>
							<li className="mb-2">
								<a href="/faq" className="text-decoration-none text-muted">
									FAQs
								</a>
							</li>
							<li className="mb-2">
								<a href="/shipping" className="text-decoration-none text-muted">
									Shipping Info
								</a>
							</li>
							<li className="mb-2">
								<a href="/returns" className="text-decoration-none text-muted">
									Returns & Exchanges
								</a>
							</li>
							<li className="mb-2">
								<a href="/warranty" className="text-decoration-none text-muted">
									Warranty
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
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
