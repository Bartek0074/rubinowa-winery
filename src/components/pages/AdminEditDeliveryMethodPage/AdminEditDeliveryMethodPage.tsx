import type { SupabaseDeliveryMethod } from '@/src/libs/types';

import { hardcodedContent } from '@/src/libs/global-content';

import { DeliveryMethodForm } from '@/src/components/forms';

type Props = {
	deliveryMethod: SupabaseDeliveryMethod;
};

const AdminEditDeliveryMethodPage = ({ deliveryMethod }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.editDeliveryMethodPage.title}
				</h1>
			</div>
			<DeliveryMethodForm initialData={deliveryMethod} />
		</div>
	);
};

export default AdminEditDeliveryMethodPage;
