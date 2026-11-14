import { List } from '@/src/components/organisms';

import type { SupabaseDeliveryMethod } from '@/src/libs/types';

import { Button } from '@/src/components/atoms';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

import { formatPrice } from '@/src/libs/utils';

type Props = {
	deliveryMethods: SupabaseDeliveryMethod[];
	isError: boolean;
};

const AdminDeliveryMethodsPage = ({ deliveryMethods, isError }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.deliveryMethodsPage.title}
				</h1>
				<Button.Link variant='outline' href={ROUTES.ADMIN_DELIVERY_METHOD_CREATE}>
					{hardcodedContent.pages.admin.deliveryMethodsPage.addDeliveryMethod}
				</Button.Link>
			</div>
			<List
				columns={[
					{
						key: 'name',
						header: hardcodedContent.pages.admin.deliveryMethodsPage.table.name,
						render: (row) => row.name,
					},
					{
						key: 'price',
						header: hardcodedContent.pages.admin.deliveryMethodsPage.table.price,
						className: 'font-medium text-black',
						render: (row) => formatPrice(row.price),
					},
				]}
				getRowKey={(row) => String(row.id)}
				getRowHref={(row) => ROUTES.ADMIN_DELIVERY_METHOD_DETAILS(String(row.id))}
				data={deliveryMethods}
				isError={isError}
				errorMessage={hardcodedContent.pages.admin.deliveryMethodsPage.fetchError}
			/>
		</div>
	);
};

export default AdminDeliveryMethodsPage;
