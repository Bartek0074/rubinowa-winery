import { Navigation, MobileNavigation, BodyScrollLock } from '@/src/components/layout';

export default async function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col'>
			<Navigation />
			<MobileNavigation />
			<BodyScrollLock />
			<main className='flex-1'>{children}</main>
			{/* Footer */}
		</div>
	);
}
