import { useState } from "react";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCount = ({ stock, onAdd }) => {
	const [count, setCount] = useState(1);
	// stock = 0;
	const handleIncrement = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleInputChange = (e) => {
		const value = Number.parseInt(e.target.value);
		if (!isNaN(value) && value >= 1 && value <= stock) {
			setCount(value);
		}
	};

	const handleAddToCart = () => {
		if (onAdd && count > 0) {
			onAdd(count);
		}
	};

	return (
		<div className="border rounded p-3 bg-light">
			<Row className="align-items-center g-2">
				<Col xs={12} className="mb-2">
					<small className="text-muted fw-semibold">Quantity</small>
				</Col>
				<Col
					xs={12}
					className="d-flex flex-column flex-md-row justify-content-between align-items-stretch gap-2"
				>
					<Col md={8}>
						<InputGroup>
							<Button
								variant="outline-secondary"
								onClick={handleDecrement}
								disabled={count <= 1}
								className="btn btn-outline-secondary pb-2"
								style={{ width: "45px" }}
							>
								<FaMinus size={12} />
							</Button>

							<Form.Control
								type="number"
								value={count}
								onChange={handleInputChange}
								min={1}
								max={stock}
								className="form-control text-center border border-secondary"
								style={{
									appearance: "textfield",
									MozAppearance: "textfield",
								}}
							/>

							<Button
								variant="outline-secondary"
								onClick={handleIncrement}
								disabled={count >= stock}
								className="btn btn-outline-secondary pb-2"
								style={{ width: "45px" }}
							>
								<FaPlus size={12} />
							</Button>
						</InputGroup>
					</Col>
					<Button variant="dark" size="md" onClick={handleAddToCart}>
						Add {count} to Cart
					</Button>
				</Col>

				<Col xs={12}>
					<div className="d-flex justify-content-between align-items-center">
						<small className="text-muted">
							{stock > 0 ? stock + " available" : "Out of stock"}
						</small>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ItemCount;

{
	/* <div className="col-md-2 col-6">
	<div className="input-group input-group-sm">
		<button
			className="btn btn-outline-secondary pb-2"
			type="button"
			onClick={handleDecrease}
		>
			<FaMinus size={14} />
		</button>
		<input
			type="text"
			className="form-control text-center border border-secondary"
			value={item.quantity}
			readOnly
			aria-label="Quantity"
		/>
		<button
			className="btn btn-outline-secondary pb-2"
			type="button"
			onClick={handleIncrease}
		>
			<FaPlus size={14} />
		</button>
	</div>
</div>; */
}
