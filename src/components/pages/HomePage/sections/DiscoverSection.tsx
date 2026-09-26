import { HomePageQueryResult } from '@/sanity.types';

import clsx from 'clsx';

import Image from 'next/image';
import { urlFor } from '@/src/sanity/lib/image';

import { Button } from '@/src/components/atoms';

type Props = {
	data: NonNullable<HomePageQueryResult>['discoverSections'];
	className?: string;
};

const DiscoverSection = ({ data, className }: Props) => {
	return (
		<div className={clsx('flex flex-col', className)}>
			{data.map((section, index) => (
				<section
					key={index}
					className='flex flex-col md:grid md:grid-cols-2 md:sticky md:top-0'
				>
					<div
						className={clsx(
							`relative w-full aspect-18/20 xl:aspect-auto xl:h-screen`,
							index % 2 === 1 && 'md:order-2',
						)}
					>
						<Image
							src={urlFor(section.image).url()}
							alt={section.heading}
							sizes='(max-width: 768px) 100vw, 50vw'
							quality={90}
							fill
							className='object-cover object-center'
						/>
					</div>
					<div className='flex flex-col items-center justify-center py-8 px-4 bg-soft-white'>
						<h2 className='text-h1 text-center uppercase'>{section.heading}</h2>
						<p className='mt-2 text-lead text-center italic'>{section.text}</p>
						<Button.Link variant='outline' className='mt-7' href={section.cta.url}>
							{section.cta.label}
						</Button.Link>
					</div>
				</section>
			))}
		</div>
	);
};

export default DiscoverSection;
