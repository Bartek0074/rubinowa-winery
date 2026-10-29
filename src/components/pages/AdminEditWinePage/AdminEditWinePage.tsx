import type { SupabaseWine } from '@/src/libs/types';

import { hardcodedContent } from '@/src/libs/global-content';

import { WineForm } from '@/src/components/forms';

type Props = {
	supabaseWine: SupabaseWine;
};

const AdminEditWinePage = ({ supabaseWine }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-h2 uppercase'>
					{hardcodedContent.pages.admin.editWinePage.title}
				</h1>
			</div>
			<WineForm initialData={supabaseWine} />
		</div>
	);
};

export default AdminEditWinePage;
