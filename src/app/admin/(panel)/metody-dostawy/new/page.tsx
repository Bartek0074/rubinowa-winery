import type { Metadata } from 'next';

import { AdminNewDeliveryMethodPage } from '@/src/components/pages';

export const metadata: Metadata = {
	title: 'Nowa metoda dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default function AdminDeliveryMethodNew() {
	return <AdminNewDeliveryMethodPage />;
}
