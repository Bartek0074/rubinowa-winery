import type { Metadata } from 'next';

import { createClient } from '@/src/libs/supabase/server';
import { client } from '@/src/sanity/lib/client';

import type { SanityWine, SupabaseWine } from '@/src/libs/types';

import { matchWines } from '@/src/libs/utils';

import { AdminWinesPage } from '@/src/components/pages';

export const metadata: Metadata = {
	title: 'Wina | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	}
};

export default async function AdminWines() {
	const supabase = await createClient();

	const { data, error } = await supabase.from('wines').select('*');

	const supabaseWines: SupabaseWine[] = data ?? [];

	const sanityWines: SanityWine[] = await client.fetch(`*[_type == "wine"]`);

	const wineMatches = matchWines(supabaseWines, sanityWines);

	return (
		<AdminWinesPage wines={wineMatches} isError={!!error} />
	);
}
