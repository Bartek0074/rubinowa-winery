import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nowa metoda dostawy | Panel Admina',
	robots: {
		index: false,
		follow: false,
		noarchive: true,
	},
};

export default function AdminDeliveryMethodNew() {
	return <p>Nowa metoda dostawy</p>;
}
