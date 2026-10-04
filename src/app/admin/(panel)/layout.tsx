import NavigationAdminPanel from '@/src/components/layout/NavigationAdminPanel';

export default function AdminPanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col'>
			<NavigationAdminPanel />
			<main className='flex-1'>{children}</main>
		</div>
	);
}
