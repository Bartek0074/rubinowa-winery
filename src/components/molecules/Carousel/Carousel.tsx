'use client';

import { useCallback, useEffect, useState } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

type CarouselProps = {
	items: React.ReactNode[];
	className?: string;
	childClassName?: string;
};

const Carousel = ({
	items,
	className,
	childClassName = 'min-w-0 flex-[0_0_100%]',
}: CarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'center',
		containScroll: false,
	});

	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;

		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect();

		emblaApi.on('select', onSelect);

		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi, onSelect]);

	return (
		<div className={className}>
			<div ref={emblaRef} className='overflow-hidden'>
				<div className='flex gap-8 lg:gap-12'>
					{items.map((item, index) => (
						<div key={index} className={childClassName}>
							{item}
						</div>
					))}
				</div>
			</div>

			<div className='mt-8 flex justify-center gap-1'>
				{items.map((_, index) => (
					<button
						key={index}
						type='button'
						aria-label={`Przejdź do slajdu ${index + 1}`}
						aria-current={selectedIndex === index}
						onClick={() => emblaApi?.scrollTo(index)}
						className='group flex p-1 items-center justify-center cursor-pointer'
					>
						<span
							className={[
								'block size-2 rounded-full transition-all ease-editorial',
								selectedIndex === index ? 'bg-black' : 'bg-black/20',
							].join(' ')}
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default Carousel;
