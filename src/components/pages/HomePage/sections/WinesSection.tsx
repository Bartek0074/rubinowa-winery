import clsx from 'clsx';

import { WineCard } from '@/src/components/molecules';

import { HomePageQueryResult } from '@/sanity.types';

type Props = {
	data: NonNullable<HomePageQueryResult>['winesSection'];
	className?: string;
};

const WinesSection = ({ data, className }: Props) => {
	return (
		<section className={clsx('flex flex-col flex-1 w-full mx-auto px-4 md:px-7 lg:px-21 2xl:px-24.5 3xl:px-28', className)}>
			<div className='grid grid-cols-1 gap-7 lg:gap-10.5 md:grid-cols-3'>
				{data.map((wine, index) => (
					<WineCard
						key={`${wine.name}-${wine.vintage}-${index}`}
						name={wine.name}
						vintage={wine.vintage}
						price={120}
						volume={wine.volume}
						img={wine.image}
						alt={wine.image.alt}
					/>
				))}
			</div>
		</section>
	);
};

export default WinesSection;
