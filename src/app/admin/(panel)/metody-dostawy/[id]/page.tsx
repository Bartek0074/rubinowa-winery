import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { getDeliveryMethodById } from '@/src/libs/supabase/queries/deliveryMethods';

import { AdminDeliveryMethodPage } from '@/src/components/pages';

export const metadata: Metadata = {
	title: 'Szczegóły metody dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default async function AdminDeliveryMethod({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const deliveryMethod = await getDeliveryMethodById(id);

	if (!deliveryMethod) notFound();

	return <AdminDeliveryMethodPage deliveryMethod={deliveryMethod} />;
}
