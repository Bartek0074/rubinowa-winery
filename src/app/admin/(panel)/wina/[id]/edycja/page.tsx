import type { Metadata } from 'next';

import { getWineById } from '@/src/libs/supabase/queries/wines';

import { AdminEditWinePage } from '@/src/components/pages';

import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edycja wina | Panel Admina',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default async function AdminEditWine({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabaseWine = await getWineById(id);

  if (!supabaseWine) notFound();

  return (
    <AdminEditWinePage supabaseWine={supabaseWine} />
  );
}
