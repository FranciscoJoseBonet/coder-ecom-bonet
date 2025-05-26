import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div
			className="container text-center d-flex flex-column justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<h1 className="display-1 fw-bold text-secondary">404</h1>
			<p className="fs-3">Página no encontrada</p>
			<p className="lead">La página que estás buscando no existe o fue movida.</p>
			<Link to="/" className="btn btn-dark mt-3">
				Volver al inicio
			</Link>
		</div>
	);
}

export default NotFound;
