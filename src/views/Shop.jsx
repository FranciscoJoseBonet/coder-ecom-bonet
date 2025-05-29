import ItemListContainer from "../components/ItemListContainer";

const Shop = () => {
	return (
		<div className="container">
			<div className="row">
				{/* ItemListContainer siempre visible */}
				<ItemListContainer head={true} />
			</div>
		</div>
	);
};

export default Shop;
