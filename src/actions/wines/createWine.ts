'use server';

import { createClient } from '@/src/libs/supabase/server';

import { revalidatePath } from 'next/cache';

import { wineSchema } from '@/src/libs/validation/wine';

import { ROUTES } from '@/src/libs/routes';

export async function createWine(formData: unknown) {
	const validated = wineSchema.safeParse(formData);

	if (!validated.success) {
		throw new Error('Nie udało się dodać wina. Nieprawidłowe dane.');
	}

	const supabase = await createClient();

	const { error } = await supabase.from('wines').insert(validated.data);

	if (error) {
		throw new Error('Nie udało się dodać wina.');
	}

	revalidatePath(ROUTES.ADMIN_WINES);
}
