import Item from "./Item";

const ItemList = ({ products }) => {
	return (
		<div className="row">
			{products.map((product) => (
				<div className="col-md-4 mb-4" key={product.id}>
					<Item product={product} />
				</div>
			))}
		</div>
	);
};

export default ItemList;
