import { FaSearch } from "react-icons/fa";

const SearchForm = () => (
	<form className="d-flex me-2 my-2 my-lg-0 position-relative">
		<input
			className="form-control me-2"
			type="search"
			placeholder="Search instruments..."
			aria-label="Search"
		/>
		<button className="btn position-absolute end-0 top-0 bottom-0" type="submit">
			<FaSearch />
		</button>
	</form>
);

export default SearchForm;
