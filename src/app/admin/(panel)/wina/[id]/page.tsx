import type { Metadata } from 'next';

import { getWineById } from '@/src/libs/supabase/queries/wines';
import { client } from '@/src/sanity/lib/client';

import type { SanityWine, WineMatch } from '@/src/libs/types';

import { AdminWinePage } from '@/src/components/pages';

import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Szczegóły wina | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default async function AdminWine({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabaseWine = await getWineById(id);

  const sanityWine: SanityWine = await client.fetch(`*[_type == "wine" && supabaseId == $id][0]`, { id });

  if (!supabaseWine) notFound();

  const wineMatch: WineMatch = {
    supabase: supabaseWine,
    sanity: sanityWine,
    isMatched: !!sanityWine
  }

  return <AdminWinePage wine={wineMatch} />;
}
