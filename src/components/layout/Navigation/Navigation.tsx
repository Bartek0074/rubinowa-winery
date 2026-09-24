'use client';

import clsx from 'clsx';

import { useState, useEffect } from 'react';

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

const Navigation = () => {
	const pathname = usePathname();

	const [isScrolled, setIsScrolled] = useState(false);

	const canBeBlank = LINK_SUPPORTED_BLANK_MODE.includes(pathname);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 32);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const {
		isCartOpen,
		openCart,
		closeCart,
		isNavMenuOpen,
		openNavMenu,
		closeNavMenu,
	} = useUiStore();

	const navigationClassName = clsx(
		'fixed z-100 top-0 flex items-center justify-between w-full gap-2 p-4 lg:p-7 transition-colors ease-editorial',
		canBeBlank
			? isScrolled || isNavMenuOpen
				? 'bg-off-white'
				: 'bg-transparent'
			: 'bg-off-white',
	);

	const logoClassName = clsx(
		'h-5.5 xs:h-6  hover:opacity-85 transition-[opacity, background-color] ease-editorial',
		canBeBlank
			? isScrolled || isNavMenuOpen
				? 'text-black'
				: 'text-off-white'
			: 'text-black',
	);
console.log({
    pathname,
    home: ROUTES.HOME,
    canBeBlank,
    isScrolled,
    isNavMenuOpen,
    navigationClassName,
});

	return (
		<nav className={navigationClassName}>
			<div className='flex flex-row items-center justify-center gap-7.25'>
				<Link
					href={ROUTES.HOME}
					onClick={isNavMenuOpen ? closeNavMenu : undefined}
				>
					<LogoWoodmark className={logoClassName} />
					test
				</Link>
				<ul className='hidden lg:flex flex-row gap-6.75'>
					{LINKS.map((link) => (
						<li key={link.href}>
							<NavLinkDesktop
								href={link.href}
								text={link.label}
								isActive={link.href === pathname}
								isBlack={isScrolled || isNavMenuOpen || !canBeBlank}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-row items-center gap-6'>
				<CartButton
					onClick={isCartOpen ? closeCart : openCart}
					isBlack={isScrolled || isNavMenuOpen || !canBeBlank}
				/>
				<MenuButton
					className='lg:hidden'
					isOpen={isNavMenuOpen}
					onClick={isNavMenuOpen ? closeNavMenu : openNavMenu}
					isBlack={isScrolled || isNavMenuOpen || !canBeBlank}
				/>
			</div>
		</nav>
	);
};

export default Navigation;
