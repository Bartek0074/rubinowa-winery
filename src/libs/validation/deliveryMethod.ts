import { z } from 'zod';

export const deliveryMethodSchema = z.object({
	name: z
		.string({ message: 'Nazwa jest wymagana.' })
		.trim()
		.min(1, { message: 'Nazwa jest wymagana.' }),

	price: z
		.number({ message: 'Cena jest wymagana i musi być liczbą.' })
		.positive({ message: 'Cena musi być większa od 0,00 zł.' }),
});
