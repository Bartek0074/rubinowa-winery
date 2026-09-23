import { defineQuery } from 'next-sanity';
import { client } from '@/src/sanity/lib/client';
import { HomePageQueryResult } from '@/sanity.types';

export const revalidate = 30;

export async function generateMetadata() {
	const meta = await client.fetch(`*[_type == "homePage"][0]{
    seo
  }`);

	if (!meta) return { title: '', description: '' };

	return {
		title: meta.seo && 'title' in meta.seo ? meta.seo.title : '',
		description: meta.seo && 'desc' in meta.seo ? meta.seo.desc : '',
	};
}

export default async function Home() {
	const homePageQuery = defineQuery(`*[_type == "homePage"][0]{
        heroSection {
            heading
        },
    }`);

	const homePageData =
		await client.fetch<NonNullable<HomePageQueryResult>>(homePageQuery);

	return (
		<div className='flex flex-col gap-4 min-h-[200vh] bg-linear-to-b from-black/80 via-transparent to-transparent'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				exercitationem vel saepe cupiditate aut, dolores veritatis culpa sint.
				Ut labore itaque molestias alias sint? Vero doloribus ipsam id
				repellendus iure unde repellat neque. Laudantium deserunt est libero
				quos? Ad aliquid a quaerat excepturi id dolore quasi molestias nihil
				animi iste, nesciunt quod perspiciatis iure illum officia velit. Omnis
				odit praesentium, commodi velit eligendi perspiciatis eaque ipsa minima
				quis expedita ex libero unde atque dolorem sed corporis, ut ipsum id.
				Dignissimos quidem praesentium reprehenderit aliquid laboriosam esse
				fugiat consequatur provident quibusdam. Voluptatum reiciendis rerum
				quidem, aliquid eaque blanditiis veniam repudiandae sapiente!
			</p>
			<p>Home Page</p>
			<p>{homePageData.heroSection.heading}</p>
		</div>
	);
}
