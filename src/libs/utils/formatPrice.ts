type FormatPrice = (price: number) => string;

export const formatPrice: FormatPrice = (price) =>
	new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: 'PLN',
	}).format(price);
