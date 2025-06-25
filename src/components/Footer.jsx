import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { fetchWebLinks } from "../service/firestore/fetchWebLinks";
import { fetchSuppLinks } from "../service/firestore/fetchSuppLinks";
import { fetchCategories } from "../service/firestore/fetchCategories";

import useFilteredFetch from "../utils/useFilteredFetch";

import Logo from "./Logo";
import WebLinks from "./WebLinks";
import FooterLinkColumn from "./FooterLinkColumn";
import SpinnerLoading from "./SpinnerLoading";

const Footer = () => {
	const {
		data: webLinksArr,
		loading: loadingWL,
		eror: errorWL,
	} = useFilteredFetch(fetchWebLinks);
	const {
		data: categoriesArr,
		loading: loadingCat,
		error: errorCat,
	} = useFilteredFetch(fetchCategories);
	const {
		data: suppLinksArr,
		loading: loadingSL,
		error: errorSL,
	} = useFilteredFetch(fetchSuppLinks);

	const legals = ["Privacy Policy", "Terms of Service", "Sitemap"];

	return (
		<footer className="bg-light pt-5 pb-3 d-flex flex-column bottom-0 mt-auto">
			<div className="container flex-grow-1">
				<div className="row g-4 ">
					{/* Primera columna */}
					<div className="col-lg-4 col-md-6">
						<div className="mb-4">
							<Logo />
							<p className="text-muted mt-4">
								Premium musical instruments for professionals and enthusiasts. Quality
								craftsmanship since 2005.
							</p>
							<div className="d-flex gap-2 mt-4">
								{webLinksArr.map((item) => {
									return (
										<WebLinks
											key={item.id}
											id={item.id}
											url={item.url}
											icon={item.icon}
										/>
									);
								})}
							</div>
						</div>
					</div>

					{/* Segunda Columna */}
					{loadingCat ? (
						<SpinnerLoading />
					) : errorCat ? (
						<FetchError error={errorCat} />
					) : (
						<FooterLinkColumn title="Shop" LinkObj={categoriesArr} _type="category" />
					)}

					{/* Tercera Columna */}
					{loadingSL ? (
						<SpinnerLoading />
					) : errorSL ? (
						<FetchError error={errorSL} />
					) : (
						<FooterLinkColumn title="Support" LinkObj={suppLinksArr} _type="support" />
					)}

					{/* Cuarta Columna */}
					<div className="col-lg-4 col-md-6">
						<h5 className="mb-3">Stay Updated</h5>
						<p className="text-muted mb-3">
							Subscribe to our newsletter for new arrivals, promotions, and expert tips.
						</p>
						<form className="mb-3">
							<div className="input-group">
								<input
									id="footer-sub-input"
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

				{/* Abajo del footer */}
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start">
						<p className="text-muted mb-md-0">
							&copy; {new Date().getFullYear()} RbMusic | by Reboot - All rights reserved.
						</p>
					</div>
					<div className="col-md-6">
						<ul className="list-inline text-center text-md-end mb-0">
							{legals.map((item, index) => {
								return (
									<li className="list-inline-item" key={index}>
										<Link to="/legals" className="text-decoration-none text-muted small">
											{item} |
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
