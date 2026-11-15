import { z } from 'zod';

export const deliveryMethodSchema = z.object({
	name: z
		.string({ message: 'Nazwa jest wymagana.' })
		.trim()
		.min(1, { message: 'Nazwa jest wymagana.' }),

	price: z
		.number({ message: 'Cena jest wymagana i musi być liczbą.' })
		.nonnegative({ message: 'Cena musi być większa lub równa 0,00 zł.' }),
});
