import Item from "./Item";

const ItemList = ({ products }) => {
	return (
		<div className="row">
			{products.map((product) => (
				<div className="col-12 col-md-6 col-lg-3 mb-4" key={product.id}>
					<Item product={product} />
				</div>
			))}
		</div>
	);
};

export default ItemList;
