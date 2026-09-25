import clsx from 'clsx';

import { HomePageQueryResult } from '@/sanity.types';

type Props = {
	data: NonNullable<HomePageQueryResult>['introSection'];
	className?: string;
};

const IntroSection = ({ data, className }: Props) => {
	return (
		<section className={clsx('flex flex-col px-4 md:px-7', className)}>
			<h2 className='text-h1 max-w-[24ch] text-balance'>{data.heading}</h2>
			<p className='mt-4 text-body sm:max-w-[48ch] sm:text-balance sm:ml-auto'>
				{data.text}
			</p>
		</section>
	);
};

export default IntroSection;
