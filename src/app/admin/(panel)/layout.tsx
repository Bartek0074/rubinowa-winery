import NavigationAdminPanel from '@/src/components/layout/NavigationAdminPanel';
import { createClient } from '@/src/libs/supabase/server';

export default async function AdminPanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = await createClient();

	const { data: { user } } = await supabase.auth.getUser();

	return (
		<div className='flex flex-col'>
			<NavigationAdminPanel email={user?.email ?? ''} />
			<main className='flex-1'>{children}</main>
		</div>
	);
}
