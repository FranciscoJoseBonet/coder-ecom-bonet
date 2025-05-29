import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoriesList = ({ categories }) => {
	return (
		<Container>
			<Row className="g-4">
				{categories.map((category) => (
					<div key={category.id} className="col-md-6">
						<CategoryCard category={category} />
					</div>
				))}
			</Row>
		</Container>
	);
};

export default CategoriesList;
