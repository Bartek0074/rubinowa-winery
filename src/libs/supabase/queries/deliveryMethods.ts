import { createClient } from '@/src/libs/supabase/server';

import type { SupabaseDeliveryMethod } from '@/src/libs/types';

export async function getDeliveryMethods(): Promise<{
	deliveryMethods: SupabaseDeliveryMethod[];
	isError: boolean;
}> {
	const supabase = await createClient();

	const { data, error } = await supabase.from('delivery_methods').select('*');

	return { deliveryMethods: data ?? [], isError: !!error };
}

export async function getDeliveryMethodById(
	id: string,
): Promise<SupabaseDeliveryMethod | null> {
	const supabase = await createClient();

	const { data, error } = await supabase
		.from('delivery_methods')
		.select('*')
		.eq('id', id)
		.maybeSingle();

	if (error) return null;

	return data;
}
