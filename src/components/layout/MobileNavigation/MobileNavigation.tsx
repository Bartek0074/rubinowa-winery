'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { NavLinkMobile } from '../components';

import { useUiStore } from '@/src/stores/uiStore';

import { ROUTES } from '@/src/libs/routes';

const links = [
	{ href: ROUTES.ABOUT, label: 'O nas' },
	{ href: ROUTES.VINEYARD, label: 'Winnica' },
	{ href: ROUTES.WINES, label: 'Wina' },
	{ href: ROUTES.BLOG, label: 'Blog' },
	{ href: ROUTES.CONTACT, label: 'Kontakt' },
];

gsap.registerPlugin(useGSAP);

const MobileNavigation = () => {
	const pathname = usePathname();

	const drawerRef = useRef<HTMLDivElement>(null);

	const { isNavMenuOpen, closeNavMenu } = useUiStore();

	useGSAP(
		() => {
			gsap.to(drawerRef.current, {
				xPercent: isNavMenuOpen ? 0 : 100,
				duration: 0.5,
				ease: 'power4.inOut',
			});
		},
		{
			dependencies: [isNavMenuOpen],
			scope: drawerRef,
		},
	);

	return (
		<nav
			ref={drawerRef}
			id='mobile-navigation'
			className='fixed z-90 inset-x-0 top-17 bottom-0 p-4 bg-off-white lg:hidden'
		>
			<ul className='flex justify-center h-[calc(100%-3.75rem)] flex-col gap-4'>
				{links.map(({ href, label }) => (
					<li key={href}>
						<NavLinkMobile
							href={href}
							text={label}
							isActive={pathname === href}
							onClick={closeNavMenu}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MobileNavigation;
