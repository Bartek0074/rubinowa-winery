import clsx from 'clsx';

type Props = {
	className?: string;
};

const HeroSection = ({ className }: Props) => {
	const sectionClassName = clsx('relative flex flex-col min-h-svh', className);

	return (
		<section className={sectionClassName}>
			<video
				src='/videos/home_page_hero_video_short_1080.mp4'
				autoPlay
				loop
				muted
				playsInline
				className='pointer-events-none absolute inset-0 z-1 h-full w-full object-cover'
			/>
		</section>
	);
};

export default HeroSection;
