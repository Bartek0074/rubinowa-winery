import { createClient } from '@/src/libs/supabase/server';

import type { SupabaseWine } from '@/src/libs/types';

export async function getWines(): Promise<{
	wines: SupabaseWine[];
	isError: boolean;
}> {
	const supabase = await createClient();

	const { data, error } = await supabase.from('wines').select('*');

	return { wines: data ?? [], isError: !!error };
}

export async function getWineById(id: string): Promise<SupabaseWine | null> {
	const supabase = await createClient();

	const { data, error } = await supabase
		.from('wines')
		.select('*')
		.eq('id', id)
		.maybeSingle();

	if (error) return null;

	return data;
}
