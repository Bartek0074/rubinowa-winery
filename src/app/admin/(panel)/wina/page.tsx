import type { Metadata } from 'next';

import { getWines } from '@/src/libs/supabase/queries/wines';
import { client } from '@/src/sanity/lib/client';

import type { SanityWine } from '@/src/libs/types';

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
	const { wines: supabaseWines, isError } = await getWines();

	const sanityWines: SanityWine[] = await client.fetch(`*[_type == "wine"]`);

	const wineMatches = matchWines(supabaseWines, sanityWines);

	return (
		<AdminWinesPage wines={wineMatches} isError={isError} />
	);
}
