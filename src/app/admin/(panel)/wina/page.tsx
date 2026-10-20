import { createClient } from '@/src/libs/supabase/server';

import { DataTable } from '@/src/components/organisms';

export default async function AdminWinesPage() {
	const supabase = await createClient();

	const { data: wines, error } = await supabase.from('wines').select('*');

	return (
		<div className='p-4'>
			<div>
				<h1 className='text-h2'>Wina</h1>
			</div>
			<DataTable
				columns={[
					{ key: 'id', header: 'ID', render: (row) => row.id },
					{ key: 'name', header: 'Nazwa', render: (row) => row.name },
					{ key: 'year', header: 'Rocznik', render: (row) => row.year },
					{ key: 'price', header: 'Cena', render: (row) => row.price + ' zł' },
				]}
				getRowKey={(row) => row.id}
				data={wines || []}
				isError={!!error}
				errorMessage='Nie udało się załadować danych.'
			/>
		</div>
	);
}
