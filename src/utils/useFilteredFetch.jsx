import { useEffect, useState } from "react";

const useFilteredFetch = (fetchFunction, filters = []) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				setError(null);

				// Pasa los filtros a la función de fetch
				const items = await fetchFunction(filters);

				setData(items);
			} catch (err) {
				console.error("Error al cargar datos:", err);
				setError("Error al cargar datos, intentá más tarde.");
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [fetchFunction, JSON.stringify(filters)]);

	return { data, loading, error };
};

export default useFilteredFetch;
