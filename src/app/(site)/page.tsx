import { defineQuery } from 'next-sanity';

import { client } from '@/src/sanity/lib/client';

import { HomePageQueryResult } from '@/sanity.types';

import { HomePage } from '@/src/components/pages';

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
            heading {
				lineOne,
				lineTwo { 
					fixed,
					rotating
				}
			}
        },
    }`);

	const homePageData =
		await client.fetch<NonNullable<HomePageQueryResult>>(homePageQuery);

	return <HomePage data={homePageData} />;
}
