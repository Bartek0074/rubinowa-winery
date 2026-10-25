import { DataTable } from '@/src/components/organisms';

import type { WineMatch } from '@/src/libs/types';

import { Button, Link } from '@/src/components/atoms';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

type Props = {
	wines: WineMatch[];
	isError: boolean;
};

const AdminWinesPage = ({ wines, isError }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.winesPage.title}
				</h1>
				<Button.Link variant='outline' href={ROUTES.ADMIN_WINE_CREATE}>
					{hardcodedContent.pages.admin.winesPage.addWine}
				</Button.Link>
			</div>
			<DataTable
				columns={[
					{
						key: 'name',
						header: hardcodedContent.pages.admin.winesPage.table.name,
						render: (row) => row.supabase.name,
					},
					{
						key: 'year',
						header: hardcodedContent.pages.admin.winesPage.table.year,
						render: (row) => row.supabase.year,
					},
					{
						key: 'price',
						header: hardcodedContent.pages.admin.winesPage.table.price,
						render: (row) =>
							new Intl.NumberFormat('pl-PL', {
								style: 'currency',
								currency: 'PLN',
							}).format(row.supabase.price),
					},
					{
						key: 'isMatched',
						header: hardcodedContent.pages.admin.winesPage.table.isMatched,
						render: (row) =>
							row.isMatched ? (
								<span className='text-success'>
									{
										hardcodedContent.pages.admin.winesPage.table.isMatchedStatus
											.yes
									}
								</span>
							) : (
								<span className='text-error'>
									{
										hardcodedContent.pages.admin.winesPage.table.isMatchedStatus
											.no
									}
								</span>
							),
					},
					{
						key: 'actions',
						header: hardcodedContent.pages.admin.winesPage.table.actions,
						render: (row) => (
							<Link href={ROUTES.ADMIN_WINE_DETAILS(row.supabase.id)}>
								{hardcodedContent.pages.admin.winesPage.table.view}
							</Link>
						),
					},
				]}
				getRowKey={(row) => row.supabase.id}
				data={wines}
				isError={isError}
				errorMessage={hardcodedContent.pages.admin.winesPage.fetchError}
			/>
		</div>
	);
};

export default AdminWinesPage;
