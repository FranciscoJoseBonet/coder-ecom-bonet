import numeral from "numeral";

export const fCurrency = (value = 0) => {
	return numeral(value).format(`$0,0.00`);
};
