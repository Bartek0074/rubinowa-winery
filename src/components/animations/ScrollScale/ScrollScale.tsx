'use client';

import clsx from 'clsx';
import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Props = {
	children: React.ReactNode;
	className?: string;
};

const ScrollScale = ({ children, className }: Props) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.set(targetRef.current, {
				scale: 1.2,
			});

			ScrollTrigger.create({
				trigger: rootRef.current,
				start: 'start center',

				onEnter: () => {
					gsap.to(targetRef.current, {
						scale: 1,
						duration: 1,
						ease: 'power3.inOut',
					});
				},

				onLeaveBack: () => {
					gsap.to(targetRef.current, {
						scale: 1.2,
						duration: 1,
						ease: 'power3.inOut',
					});
				},
			});
		},
		{
			scope: rootRef,
		},
	);

	return (
		<div
			ref={rootRef}
			className={clsx('relative h-full w-full overflow-hidden', className)}
		>
			<div ref={targetRef} className='relative h-full w-full'>
				{children}
			</div>
		</div>
	);
};

export default ScrollScale;
