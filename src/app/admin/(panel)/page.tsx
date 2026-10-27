import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	}
};

export default function AdminPanelPage() {
	return <div>Admin Panel Page</div>;
}