'use client';

import { useRef } from 'react';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

import { MenuButton } from '../components';

import { useUiStore } from '@/src/stores/uiStore';

gsap.registerPlugin(useGSAP);

const CartDrawer = () => {
	const drawerRef = useRef<HTMLDivElement>(null);
	const backdropRef = useRef<HTMLDivElement>(null);

	const { isCartOpen, closeCart } = useUiStore();

	useGSAP(
		() => {
			const drawer = drawerRef.current;
			const backdrop = backdropRef.current;

			if (!drawer || !backdrop) return;

			gsap.to(drawer, {
				xPercent: isCartOpen ? 0 : 100,
				duration: 0.5,
				ease: 'power4.inOut',
				pointerEvents: isCartOpen ? 'auto' : 'none',
			});

			gsap.to(backdrop, {
				opacity: isCartOpen ? 1 : 0,
				duration: 0.5,
				ease: 'power4.inOut',
				pointerEvents: isCartOpen ? 'auto' : 'none',
			});
		},
		{
			dependencies: [isCartOpen],
			scope: drawerRef,
		},
	);

	return (
		<>
			<div
				ref={backdropRef}
				className='pointer-events-none fixed inset-0 z-105 hidden bg-black/40 opacity-0 backdrop-blur-xs lg:block cursor-pointer'
				aria-hidden='true'
				onClick={closeCart}
			/>
			<div
				ref={drawerRef}
				id='cart-drawer'
				className='timeout-opacity pointer-events-none fixed z-110 inset-y-0 right-0 w-full bg-off-white p-4 lg:max-w-120 lg:p-7'
			>
				<div className='flex justify-end mb-4'>
					<MenuButton onClick={closeCart} isOpen={true} isBlank={false} />
				</div>
				<div className='py-4'>
					<p className='text-lead'>Zawartość Koszyka</p>
				</div>
			</div>
		</>
	);
};

export default CartDrawer;
