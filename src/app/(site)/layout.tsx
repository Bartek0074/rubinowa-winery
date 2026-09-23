import {
	Navigation,
	MobileNavigation,
	BodyScrollLock,
	CartDrawer,
} from '@/src/components/layout';

export default async function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col'>
			<Navigation />
			<div className='timeout-opacity'>
				<MobileNavigation />
				<CartDrawer />
			</div>
			<BodyScrollLock />
			<main className='flex-1 -z-1'>{children}</main>
			{/* Footer */}
		</div>
	);
}
