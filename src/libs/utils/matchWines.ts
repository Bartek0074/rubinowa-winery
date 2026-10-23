import type { SanityWine, SupabaseWine, WineMatch } from '@/src/libs/types';

export function matchWines(
	supabaseWines: SupabaseWine[],
	sanityWines: SanityWine[],
): WineMatch[] {
	const sanityBySupabaseId = new Map(
		sanityWines.map((wine) => [wine.supabaseId, wine]),
	);

	return supabaseWines.map((supabase) => {
		const sanity = sanityBySupabaseId.get(supabase.id) ?? null;

		return {
			supabase,
			sanity,
			isMatched: sanity !== null,
		};
	});
}
