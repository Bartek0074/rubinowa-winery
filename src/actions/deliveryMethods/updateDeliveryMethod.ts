'use server';

import { createClient } from '@/src/libs/supabase/server';

import { revalidatePath } from 'next/cache';

import { deliveryMethodSchema } from '@/src/libs/validation/deliveryMethod';

import { ROUTES } from '@/src/libs/routes';

export async function updateDeliveryMethod(id: string, formData: unknown) {
	const validated = deliveryMethodSchema.safeParse(formData);

	if (!validated.success) {
		throw new Error('Nie udało się zaktualizować metody dostawy. Nieprawidłowe dane.');
	}

	const supabase = await createClient();

	const { data, error } = await supabase
		.from('delivery_methods')
		.update(validated.data)
		.eq('id', id)
		.select('id')
		.maybeSingle();

	if (error || !data) {
		throw new Error('Nie udało się zaktualizować metody dostawy.');
	}

	revalidatePath(ROUTES.ADMIN_DELIVERY_METHODS);
}
