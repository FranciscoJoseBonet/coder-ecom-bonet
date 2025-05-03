import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting="Bienvenidos a mi app" />
		</>
	);
}

export default App;
