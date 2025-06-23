import { fetchCategories } from "../service/firestore/fetchCategories";
import { useFilteredFetch } from "../utils/useFilteredFetch";
import CategoriesList from "./CategoriesList";
import FetchError from "./FetchError";
import SpinnerLoading from "./SpinnerLoading";

const CategoriesListContainer = () => {
	const { data: products, loading, error } = useFilteredFetch(fetchCategories, []);

	const category = products[0];
	if (loading) {
		return <SpinnerLoading />;
	}

	if (error || !category) {
		return <FetchError error={error} />;
	}

	return (
		<section className="py-5 bg-light">
			<div className="container">
				<h2 className="mb-4">Shop by Category</h2>
				<div className="row g-4 mt-4">
					<CategoriesList categories={products} />
				</div>
			</div>
		</section>
	);
};

export default CategoriesListContainer;
