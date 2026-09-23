import clsx from 'clsx';

type Props = {
	className?: string;
};

const HeroSection = ({ className }: Props) => {
	const sectionClassName = clsx(
		'relative flex min-h-svh overflow-hidden',
		className,
	);

	return (
		<section className={sectionClassName}>
			<video
				src='/videos/home_page_hero_video_short_1080.mp4'
				autoPlay
				loop
				muted
				playsInline
				className='pointer-events-none absolute inset-0 z-1 h-full w-full object-cover object-[80%]'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-x-0 bottom-0 z-2 h-[60%] bg-linear-to-t from-black/15 via-black/5 to-transparent'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-y-0 bottom-0 z-2 w-[60%] bg-linear-to-r from-black/30 via-black/10 to-transparent'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-x-0 top-0 z-2 h-[20%] bg-linear-to-b from-black/30 via-black/10 to-transparent'
			/>
			<div className='z-3'>
				<h1 className='text-display text-off-white absolute bottom-8 left-4 lg:left-7 lg:bottom-14'>
					Poznaj aromat i smak
					<br />
					Winnicy
					Rubinowej.
				</h1>
			</div>
		</section>
	);
};

export default HeroSection;