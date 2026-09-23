import { Navigation, MobileNavigation } from '@/src/components/layout';

export default async function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col'>
			<Navigation />
			<MobileNavigation />
			<main className='flex-1'>{children}</main>
			{/* Footer */}
		</div>
	);
}
