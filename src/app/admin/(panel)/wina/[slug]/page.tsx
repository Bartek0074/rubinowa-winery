import type { Metadata } from 'next';

import { notFound } from 'next/navigation';


// export const metadata: Metadata = {
// 	title: 'Edit Transaction',
// };

export default async function AdminWine({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	console.log(slug)

	return (
		<div>
			bim
			{slug}
		</div>
	);
}
