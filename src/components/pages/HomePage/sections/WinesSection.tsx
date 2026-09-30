import clsx from 'clsx';

import { WineCard, Carousel } from '@/src/components/molecules';

import { HomePageQueryResult } from '@/sanity.types';

type Props = {
	data: NonNullable<HomePageQueryResult>['winesSection'];
	className?: string;
};

const WinesSection = ({ data, className }: Props) => {
	return (
		<section
			className={clsx(
				'flex flex-col flex-1 w-full px-base xs:px-0 xl:px-base',
				className,
			)}
		>
			<Carousel
				className='xl:hidden'
				childClassName='min-w-0 flex-[0_0_99.5%] xs:flex-[0_0_27.5rem] sm:flex-[0_0_25rem]'
				items={data.map((wine, index) => (
					<div key={`${wine.name}-${wine.vintage}-${index}-carousel`}>
						<WineCard
							name={wine.name}
							vintage={wine.vintage}
							price={120}
							volume={wine.volume}
							img={wine.image}
							alt={wine.image.alt}
						/>
					</div>
				))}
			/>
			<div className='hidden xl:grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-3'>
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
