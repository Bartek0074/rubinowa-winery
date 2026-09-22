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
		<div>
			<p>Home Page</p>
			<p>{homePageData.heroSection.heading}</p>
		</div>
	);
}
