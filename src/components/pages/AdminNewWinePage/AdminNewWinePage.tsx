import { hardcodedContent } from '@/src/libs/global-content';

import { WineForm } from '@/src/components/forms';

const AdminNewWinePage = () => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.newWinePage.title}
				</h1>
			</div>
			<WineForm />
		</div>
	);
};

export default AdminNewWinePage;
