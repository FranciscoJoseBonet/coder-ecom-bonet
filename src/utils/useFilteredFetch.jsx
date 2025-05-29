import { useEffect, useState } from "react";

// Los argumentos son la funcionn y una lista que tiene objetos del tipo: {key, value, compare}
// El compare puede tomar 3 valores: "===" (para encontrar uno por id), "includes" (para filtrar por booleanos y banderas) y "equalsIgnoreCase" (para filtrar por categorias)

export const useFilteredFetch = (fetchFunction, filters = []) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				setError(null);

				const items = await fetchFunction();

				let filteredItems = items;

				for (const filter of filters) {
					const { key, value, compare = "===" } = filter;

					if (value != null) {
						filteredItems = filteredItems.filter((item) => {
							switch (compare) {
								case "===":
									return item[key] === value;
								case "includes":
									return item[key].includes(value);
								case "equalsIgnoreCase":
									return item[key]?.toLowerCase?.() === value?.toLowerCase?.();
								default:
									return true;
							}
						});
					}
				}

				setData(filteredItems);
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
