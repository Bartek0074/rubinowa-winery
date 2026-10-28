import type { WineMatch } from '@/src/libs/types';

import { Button, Alert, DetailItem } from '@/src/components/atoms';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

import { formatPrice, formatVolume } from '@/src/libs/utils';

type Props = {
	wine: WineMatch;
};

const AdminWinePage = ({ wine }: Props) => {
	return (
		<div className='px-base mt-section-sm'>
			<div className='flex justify-between items-center'>
				<h1 className='text-h2 uppercase'>
					{wine.supabase.name} {wine.supabase.vintage}
				</h1>
			</div>
			<hr className='my-10 text-black-muted/40' />
			<section>
				<div className='flex justify-between items-center'>
					<h2 className='text-h4 uppercase'>
						{hardcodedContent.pages.admin.winePage.salesSection.title}
					</h2>
					<Button.Link
						variant='outline'
						href={ROUTES.ADMIN_WINE_EDIT(wine.supabase.id)}
					>
						{hardcodedContent.pages.admin.winePage.salesSection.edit}
					</Button.Link>
				</div>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
					<DetailItem
						label={hardcodedContent.pages.admin.winePage.salesSection.price}
					>
						{formatPrice(wine.supabase.price)}
					</DetailItem>
					<DetailItem
						label={hardcodedContent.pages.admin.winePage.salesSection.volume}
					>
						{formatVolume(wine.supabase.volume_ml)}
					</DetailItem>
				</div>
			</section>
			<hr className='my-10 text-black-muted/40' />
			<section>
				<div className='flex justify-between items-center'>
					<h2 className='text-h4 uppercase'>
						{hardcodedContent.pages.admin.winePage.marketingSection.title}
					</h2>
					{wine.sanity ? (
						<Button.Anchor
							variant='outline'
							href={ROUTES.STUDIO_WINE(wine.sanity._id)}
							target='_blank'
						>
							{hardcodedContent.pages.admin.winePage.marketingSection.edit}
						</Button.Anchor>
					) : (
						<Button.Anchor
							variant='outline'
							href={ROUTES.STUDIO_WINES}
							target='_blank'
						>
							{hardcodedContent.pages.admin.winePage.marketingSection.create}
						</Button.Anchor>
					)}
				</div>
				{wine.isMatched && wine.sanity ? (
					<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
						<DetailItem
							label={
								hardcodedContent.pages.admin.winePage.marketingSection.volume
							}
						>
							{wine?.sanity.volume}
						</DetailItem>
					</div>
				) : (
					<Alert
						status='error'
						message={
							hardcodedContent.pages.admin.winePage.marketingSection.alert.title
						}
						description={
							hardcodedContent.pages.admin.winePage.marketingSection.alert
								.description
						}
						className='mt-6'
					/>
				)}
			</section>
		</div>
	);
};

export default AdminWinePage;
