import { HomePageQueryResult } from '@/sanity.types';
import { RotatingText } from '../components';

import clsx from 'clsx';

type Props = {
	data: NonNullable<HomePageQueryResult>['heroSection'];
	className?: string;
};

const HeroSection = ({ data, className }: Props) => {
	const sectionClassName = clsx(
		'relative flex min-h-svh overflow-hidden',
		className,
	);

	return (
		<section className={sectionClassName}>
			<video
				src='/videos/home_page_hero_video.mp4'
				autoPlay
				loop
				muted
				playsInline
				disablePictureInPicture
				className='pointer-events-none absolute inset-0 z-1 h-full w-full object-cover object-[80%]'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 top-0 z-2 bg-linear-to-br from-black/25 via-black/10 to-transparent'
			/>
			<div className='z-3'>
				<h1 className='text-display text-off-white absolute bottom-12 left-4 md:left-7 md:bottom-1/2 md:translate-y-1/2'>
					{data.heading.lineOne}
					<br />
					{data.heading.lineTwo.fixed}{' '}
					<RotatingText words={data.heading.lineTwo.rotating} />
				</h1>
			</div>
		</section>
	);
};

export default HeroSection;
