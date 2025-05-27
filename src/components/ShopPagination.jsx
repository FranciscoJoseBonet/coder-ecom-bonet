const ShopPagination = () => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<nav aria-label="Product pagination">
				<ul className="pagination">
					<li className="page-item disabled">
						<span className="page-link">Previous</span>
					</li>
					<li className="page-item active">
						<span className="page-link">1</span>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" data-page="2">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" data-page="3">
							3
						</a>
					</li>
					<li className="page-item">
						<span className="page-link">...</span>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" data-page="8">
							8
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" data-page="2">
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default ShopPagination;
