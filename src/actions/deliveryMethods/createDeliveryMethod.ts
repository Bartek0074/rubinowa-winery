'use server';

import { createClient } from '@/src/libs/supabase/server';

import { revalidatePath } from 'next/cache';

import { deliveryMethodSchema } from '@/src/libs/validation/deliveryMethod';

import { ROUTES } from '@/src/libs/routes';

export async function createDeliveryMethod(formData: unknown) {
	const validated = deliveryMethodSchema.safeParse(formData);

	if (!validated.success) {
		throw new Error('Nie udało się dodać metody dostawy. Nieprawidłowe dane.');
	}

	const supabase = await createClient();

	const { error } = await supabase.from('delivery_methods').insert(validated.data);

	if (error) {
		throw new Error('Nie udało się dodać metody dostawy.');
	}

	revalidatePath(ROUTES.ADMIN_DELIVERY_METHODS);
}
