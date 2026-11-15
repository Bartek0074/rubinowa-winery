import type { SupabaseDeliveryMethod } from '@/src/libs/types';

import { Button, DetailItem } from '@/src/components/atoms';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

import { formatPrice } from '@/src/libs/utils';

type Props = {
	deliveryMethod: SupabaseDeliveryMethod;
};

const AdminDeliveryMethodPage = ({ deliveryMethod }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center'>
				<h1 className='text-h2 uppercase'>
					{deliveryMethod.name}
				</h1>
			</div>
			<hr className='my-10 text-black-muted/40' />
			<section>
				<div className='flex justify-between items-center'>
					<h2 className='text-h4 uppercase'>
						{hardcodedContent.pages.admin.deliveryMethodPage.salesSection.title}
					</h2>
					<Button.Link
						variant='outline'
						href={ROUTES.ADMIN_DELIVERY_METHOD_EDIT(String(deliveryMethod.id))}
					>
						{hardcodedContent.pages.admin.deliveryMethodPage.salesSection.edit}
					</Button.Link>
				</div>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
					<DetailItem
						label={hardcodedContent.pages.admin.deliveryMethodPage.salesSection.price}
					>
						{formatPrice(deliveryMethod.price)}
					</DetailItem>
				</div>
			</section>
		</div>
	);
};

export default AdminDeliveryMethodPage;
