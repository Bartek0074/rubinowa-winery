import type { Metadata } from 'next';

import { getDeliveryMethods } from '@/src/libs/supabase/queries/deliveryMethods';

export const metadata: Metadata = {
	title: 'Metody dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default async function AdminDeliveryMethods() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { deliveryMethods, isError } = await getDeliveryMethods();

	return <p>Metody dostawy</p>;
}
