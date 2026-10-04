import LogoutButton from '@/src/components/atoms/LogoutButton/LogoutButton';

export default function AdminPanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<p>Admin Layout</p>
			<LogoutButton className='mb-4' />
			{children}
		</div>
	);
}
