'use client';

import clsx from 'clsx';

import { useState, useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { MenuButton, CartButton, NavLinkDesktop } from '../components';

import { LogoWoodmark } from '@/src/components/icons/';

import { ROUTES } from '@/src/libs/routes';

import { useUiStore } from '@/src/stores/uiStore';

const LINKS = [
	{ href: ROUTES.ABOUT, label: 'O nas' },
	{ href: ROUTES.VINEYARD, label: 'Winnica' },
	{ href: ROUTES.WINES, label: 'Wina' },
	{ href: ROUTES.BLOG, label: 'Blog' },
	{ href: ROUTES.CONTACT, label: 'Kontakt' },
];

const LINK_SUPPORTED_BLANK_MODE = [ROUTES.HOME];

const HIDE_THRESHOLD = 600;
const BLANK_THRESHOLD = 300;
const SCROLL_THRESHOLD = 16;

const Navigation = () => {
	const pathname = usePathname();

	const [y, setY] = useState(0);

	const [isBlank, setIsBlank] = useState(true);

	const [isHidden, setIsHidden] = useState(false);

	const [isMounted, setIsMounted] = useState(false);

	const prevY = useRef(0);

	const {
		isCartOpen,
		openCart,
		closeCart,
		isNavMenuOpen,
		openNavMenu,
		closeNavMenu,
	} = useUiStore();

	useEffect(() => {
		const isSupportedPath = LINK_SUPPORTED_BLANK_MODE.includes(pathname);

		if (!isSupportedPath) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsBlank(false);
			return;
		}

		setIsBlank(y < BLANK_THRESHOLD && !isNavMenuOpen);
	}, [y, isNavMenuOpen, pathname]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);

		const handleScroll = () => {
			const currentY = window.scrollY;
			const delta = currentY - prevY.current;

			setY(currentY);

			if (currentY <= HIDE_THRESHOLD || isNavMenuOpen) {
				setIsHidden(false);
				prevY.current = currentY;
				return;
			}

			if (Math.abs(delta) >= SCROLL_THRESHOLD) {
				setIsHidden(delta > 0);
				prevY.current = currentY;
			}
		};

		prevY.current = window.scrollY;
		handleScroll();

		window.addEventListener('scroll', handleScroll, {
			passive: true,
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isNavMenuOpen]);

	const navigationClassName = clsx(
		'fixed z-100 top-0 flex items-center justify-between w-full gap-2 p-4 lg:p-7 transition-[transform, background-color] ease-editorial',
		isHidden && !isNavMenuOpen ? 'translate-y-[-100%]' : 'translate-y-0',
		isBlank ? 'bg-transparent' : 'bg-off-white',
	);

	const logoClassName = clsx(
		'h-5.5 xs:h-6  hover:opacity-85 transition-[opacity, background-color] ease-editorial',
		isBlank ? 'text-off-white' : 'text-black',
	);

	return (
		<nav className={navigationClassName} key={isMounted ? 0 : 1}>
			<div className='flex flex-row items-center justify-center gap-7.25'>
				<Link
					href={ROUTES.HOME}
					onClick={isNavMenuOpen ? closeNavMenu : undefined}
				>
					<LogoWoodmark className={logoClassName} />
				</Link>
				<ul className='hidden lg:flex flex-row gap-6.75'>
					{LINKS.map((link) => (
						<li key={link.href}>
							<NavLinkDesktop
								href={link.href}
								text={link.label}
								isActive={link.href === pathname}
								isBlank={isBlank}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-row items-center gap-6'>
				<CartButton
					onClick={isCartOpen ? closeCart : openCart}
					isBlank={isBlank}
				/>
				<MenuButton
					className='lg:hidden'
					isOpen={isNavMenuOpen}
					onClick={isNavMenuOpen ? closeNavMenu : openNavMenu}
					isBlank={isBlank}
				/>
			</div>
		</nav>
	);
};

export default Navigation;
