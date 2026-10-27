import { createClient } from '@/src/libs/supabase/server';
import { client } from '@/src/sanity/lib/client';

import type { SanityWine, SupabaseWine, WineMatch } from '@/src/libs/types';

import { AdminWinePage } from '@/src/components/pages';

import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meta = await client.fetch(`*[_type == "wine" && supabaseId == $id][0]{
        name,
        vintage
    }`, { id });

  if (!meta) return { title: 'Wino niepowiązane | Panel Admina', description: '', robots: { index: false, follow: false, noarchive: true } };

  const title = meta.name && meta.vintage ? `${meta.name} ${meta.vintage}` : meta.name || '';

  return {
    title: title + ' | Panel Admina',
    description: title,
    robots: {
      index: false,
      follow: false,
      noarchive: true
    }
  };
}

export default async function AdminWine({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data, error } = await supabase.from('wines').select('*').eq('id', id).maybeSingle();

  const supabaseWine: SupabaseWine = data;

  const sanityWine: SanityWine = await client.fetch(`*[_type == "wine" && supabaseId == $id][0]`, { id });

  const wineMatch: WineMatch = {
    supabase: supabaseWine,
    sanity: sanityWine,
    isMatched: !!sanityWine
  }

  if (!supabaseWine || error) notFound();

  return <AdminWinePage wine={wineMatch} />;
}
