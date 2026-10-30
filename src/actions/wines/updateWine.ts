'use server';

import { createClient } from '@/src/libs/supabase/server';

import { revalidatePath } from 'next/cache';

import { wineSchema } from '@/src/libs/validation/wine';

import { ROUTES } from '@/src/libs/routes';

export async function updateWine(id: string, formData: unknown) {
	const validated = wineSchema.safeParse(formData);

	if (!validated.success) {
		throw new Error('Nie udało się zaktualizować wina. Nieprawidłowe dane.');
	}

	const supabase = await createClient();

	const { data, error } = await supabase
		.from('wines')
		.update(validated.data)
		.eq('id', id)
		.select('id')
		.maybeSingle();

	if (error || !data) {
		throw new Error('Nie udało się zaktualizować wina.');
	}

	revalidatePath(ROUTES.ADMIN_WINES);
}
