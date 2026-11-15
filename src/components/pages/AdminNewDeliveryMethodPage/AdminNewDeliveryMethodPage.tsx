import { hardcodedContent } from '@/src/libs/global-content';

import { DeliveryMethodForm } from '@/src/components/forms';

const AdminNewDeliveryMethodPage = () => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.newDeliveryMethodPage.title}
				</h1>
			</div>
			<DeliveryMethodForm />
		</div>
	);
};

export default AdminNewDeliveryMethodPage;
