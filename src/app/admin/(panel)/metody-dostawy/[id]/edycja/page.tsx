import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { getDeliveryMethodById } from '@/src/libs/supabase/queries/deliveryMethods';

export const metadata: Metadata = {
	title: 'Edycja metody dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default async function AdminEditDeliveryMethod({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const deliveryMethod = await getDeliveryMethodById(id);

	if (!deliveryMethod) notFound();

	return <p>Edycja metody dostawy</p>;
}
