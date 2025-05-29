import ItemListContainer from "../components/ItemListContainer";

const Shop = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					{/* Grilla de productos */}
					<div className="d-none d-md-block mb-4" style={{ background: "#fdfdfd" }}>
						<ItemListContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
