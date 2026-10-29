'use client';

import clsx from 'clsx';

import { useRef, useState } from 'react';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type FormErrorProps = {
	message?: string;
	className?: string;
};

export default function FormError({ message, className }: FormErrorProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [displayedMessage, setDisplayedMessage] = useState(message);

	useGSAP(
		() => {
			const wrapper = wrapperRef.current;

			if (!wrapper) return;

			if (message) {
				setDisplayedMessage(message);

				gsap.to(wrapper, {
					height: 'auto',
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power2.inOut',
				});
			} else {
				gsap.to(wrapper, {
					height: 0,
					opacity: 0,
					y: -4,
					duration: 0.5,
					ease: 'power2.inOut',
					onComplete: () => setDisplayedMessage(undefined),
				});
			}
		},
		{ dependencies: [message] },
	);

	return (
		<div
			ref={wrapperRef}
			aria-hidden={!displayedMessage}
			className='h-0 overflow-hidden opacity-0'
		>
			<p
				role={displayedMessage ? 'alert' : undefined}
				className={clsx('text-small text-error', className)}
			>
				{displayedMessage}
			</p>
		</div>
	);
}
