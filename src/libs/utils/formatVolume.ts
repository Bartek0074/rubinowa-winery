type FormatVolume = (volume: number) => string;

export const formatVolume: FormatVolume = (volume) =>
	new Intl.NumberFormat('pl-PL', {
		style: 'unit',
		unit: 'milliliter',
	}).format(volume);
