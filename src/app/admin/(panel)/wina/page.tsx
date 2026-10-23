import { createClient } from '@/src/libs/supabase/server';
import { client } from '@/src/sanity/lib/client';

import { DataTable } from '@/src/components/organisms';

import type { SanityWine, SupabaseWine } from '@/src/libs/types';

import { matchWines } from '@/src/libs/utils';

export default async function AdminWinesPage() {
	const supabase = await createClient();

	const { data, error } = await supabase.from('wines').select('*');

	const supabaseWines: SupabaseWine[] = data ?? [];

	const sanityWines: SanityWine[] = await client.fetch(`*[_type == "wine"]`);

	const wineMatches = matchWines(supabaseWines, sanityWines);

	return (
		<div className='p-4'>
			<div>
				<h1 className='text-h2'>Wina</h1>
			</div>
			<DataTable
				columns={[
					{ key: 'name', header: 'Nazwa', render: (row) => row.supabase.name },
					{
						key: 'year',
						header: 'Rocznik',
						render: (row) => row.supabase.year,
					},
					{
						key: 'price',
						header: 'Cena',
						render: (row) => row.supabase.price + ' zł',
					},
					{
						key: 'isMatched',
						header: 'Powiązanie z Studio',
						render: (row) =>
							row.isMatched ? (
								<span className='text-success'>Powiązane</span>
							) : (
								<span className='text-error'>Niepowiązane</span>
							),
					},
					{ key: 'id', header: 'ID', render: (row) => row.supabase.id },
				]}
				getRowKey={(row) => row.supabase.id}
				data={wineMatches}
				isError={!!error}
				errorMessage='Nie udało się załadować danych.'
			/>
		</div>
	);
}
