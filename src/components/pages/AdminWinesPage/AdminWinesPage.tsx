import { DataTable } from '@/src/components/organisms';

import type { WineMatch } from '@/src/libs/types';

import { Button, Link } from '@/src/components/atoms';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

import { formatPrice, formatVolume } from '@/src/libs/utils';

type Props = {
	wines: WineMatch[];
	isError: boolean;
};

const AdminWinePage = ({ wines, isError }: Props) => {
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
						key: 'vintage',
						header: hardcodedContent.pages.admin.winesPage.table.vintage,
						render: (row) => row.supabase.vintage,
					},
					{
						key: 'price',
						header: hardcodedContent.pages.admin.winesPage.table.price,
						render: (row) => formatPrice(row.supabase.price),
					},
					{
						key: 'volume_ml',
						header: hardcodedContent.pages.admin.winesPage.table.volume,
						render: (row) => formatVolume(row.supabase.volume_ml),
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

export default AdminWinePage;
