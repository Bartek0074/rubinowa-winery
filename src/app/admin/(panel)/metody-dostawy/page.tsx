import type { Metadata } from 'next';

import { getDeliveryMethods } from '@/src/libs/supabase/queries/deliveryMethods';

import { AdminDeliveryMethodsPage } from '@/src/components/pages';

export const metadata: Metadata = {
	title: 'Metody dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default async function AdminDeliveryMethods() {
	const { deliveryMethods, isError } = await getDeliveryMethods();

	return <AdminDeliveryMethodsPage deliveryMethods={deliveryMethods} isError={isError} />;
}
