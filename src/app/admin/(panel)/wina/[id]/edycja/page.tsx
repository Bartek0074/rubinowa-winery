import { createClient } from '@/src/libs/supabase/server';

import type { SupabaseWine } from '@/src/libs/types';

import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = await createClient();

  const { data, error } = await supabase.from('wines').select('*').eq('id', id).maybeSingle();

  const supabaseWine: SupabaseWine = data;

  const title = supabaseWine
    ? `Edycja wina ${data.name ?? ''} ${data.vintage ?? ''}`.trim()
    : 'Edycja wina';

  return {
    title: title,
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

  if (!supabaseWine || error) notFound();

  return (
    <p>Edycja wina {supabaseWine.name}</p>
  );
}
