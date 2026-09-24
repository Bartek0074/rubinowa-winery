'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ROTATION_DURATION = 0.625;
const ROTATION_INTERVAL = 3000;
const ROTATION_EASE = 'power4.inOut';

type Props = {
	words: string[];
};

const RotatingText = ({ words }: Props) => {
	const currentRef = useRef<HTMLSpanElement>(null);
	const nextRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (words.length < 2) return;

		const current = currentRef.current;
		const next = nextRef.current;

		if (!current || !next) return;

		let index = 0;

		const rotate = () => {
			const nextIndex = (index + 1) % words.length;

			next.textContent = words[nextIndex];

			gsap.set(next, {
				yPercent: -100,
				opacity: 0,
			});

			gsap
				.timeline({
					defaults: {
						duration: ROTATION_DURATION,
						ease: ROTATION_EASE,
					},
					onComplete: () => {
						current.textContent = words[nextIndex];
						gsap.set(current, { yPercent: 0, opacity: 1 });
						index = nextIndex;
					},
				})
				.to(current, {
					yPercent: 100,
					opacity: 0,
				})
				.to(
					next,
					{
						yPercent: 0,
						opacity: 1,
					},
					'<',
				);
		};

		const interval = window.setInterval(rotate, ROTATION_INTERVAL);

		return () => {
			window.clearInterval(interval);
			gsap.killTweensOf([current, next]);
		};
	}, [words]);

	const longestWord = words.reduce((longest, word) =>
		word.length > longest.length ? word : longest,
	);

	return (
		<span className='relative inline-block align-baseline'>
			<span aria-hidden='true' className='invisible block whitespace-nowrap'>
				{longestWord}
			</span>

			<span className='absolute left-0 top-0 block'>
				<span
					ref={currentRef}
					className='absolute left-0 top-0 block whitespace-nowrap'
				>
					{words[0]}
				</span>

				<span
					ref={nextRef}
					aria-hidden='true'
					className='absolute left-0 top-0 block whitespace-nowrap'
				/>
			</span>
		</span>
	);
};

export default RotatingText;
