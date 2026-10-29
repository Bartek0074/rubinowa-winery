import type { Metadata } from 'next';

import { AdminNewWinePage } from '@/src/components/pages';

export const metadata: Metadata = {
	title: 'Nowe wino | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default function AdminWineNew() {
	return <AdminNewWinePage />;
}
