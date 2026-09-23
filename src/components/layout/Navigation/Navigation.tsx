'use client';

import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { MenuButton, CartButton, NavLinkDesktop } from './components';

import { LogoWoodmark } from '@/src/components/icons/';

import { ROUTES } from '@/src/libs/routes';

const links = [
	{ href: ROUTES.ABOUT, label: 'O nas' },
	{ href: ROUTES.VINEYARD, label: 'Winnica' },
	{ href: ROUTES.WINES, label: 'Wina' },
	{ href: ROUTES.BLOG, label: 'Blog' },
	{ href: ROUTES.CONTACT, label: 'Kontakt' },
];

const Navigation = () => {
	const pathname = usePathname();

	const navigationClassName = clsx(
		'fixed z-100 top-0 flex items-center justify-between w-full gap-2 p-4 lg:p-6.75 bg-off-white',
	);

	return (
		<nav className={navigationClassName}>
			<div className='flex flex-row items-center justify-center gap-7.25'>
				<Link href='/'>
					<LogoWoodmark className='h-5.5 lg:h-6 text-black hover:opacity-85 transition-opacity duration-200' />
				</Link>
				<ul className='hidden lg:flex flex-row gap-6.75'>
					{links.map((link) => (
						<li key={link.href}>
							<NavLinkDesktop
								href={link.href}
								text={link.label}
								isActive={link.href === pathname}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-row items-center gap-6'>
				<CartButton onClick={() => console.log('Cart clicked')} />
				<MenuButton
					className='lg:hidden'
					isOpen={false}
					onClick={() => console.log('Menu clicked')}
				/>
			</div>
		</nav>
	);
};

export default Navigation;
