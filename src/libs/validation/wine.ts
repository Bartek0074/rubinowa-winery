import { z } from 'zod';

export const wineSchema = z.object({
	name: z
		.string({ message: 'Nazwa jest wymagana.' })
		.trim()
		.min(1, { message: 'Nazwa jest wymagana.' }),

	price: z
		.number({ message: 'Cena jest wymagana i musi być liczbą.' })
		.positive({ message: 'Cena musi być większa od 0,00 zł.' }),

	vintage: z
		.number({ message: 'Rocznik jest wymagany i musi być liczbą całkowitą.' })
		.int({ message: 'Rocznik musi być liczbą całkowitą.' })
		.min(1900, { message: 'Rocznik musi być większy lub równy 1900.' })
		.max(new Date().getFullYear(), {
			message: 'Rocznik nie może być większy niż bieżący rok.',
		}),

	volume_ml: z
		.number({ message: 'Pojemność jest wymagana i musi być liczbą całkowitą.' })
		.int({ message: 'Pojemność musi być liczbą całkowitą.' })
		.positive({ message: 'Pojemność musi być większa od zera.' }),
});
