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
			<MobileNavigation />
			<BodyScrollLock />
			<CartDrawer />
			<main className='flex-1'>{children}</main>
			{/* Footer */}
		</div>
	);
}
