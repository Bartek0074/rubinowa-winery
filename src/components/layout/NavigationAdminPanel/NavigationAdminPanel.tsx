'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { MenuButton, NavLinkDesktop, NavLinkMobile } from '../components';

import { LogoutButton } from '@/src/components/atoms';
import { LogoWoodmark } from '@/src/components/icons';
import { ROUTES } from '@/src/libs/routes';

const LINKS = [
	{
		href: ROUTES.ADMIN_WINES,
		label: 'Wina',
	},
];

export default function NavigationAdminPanel() {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false)

	const toggleNavMenu = () => setIsOpen((prev) => !prev);

	const navigationClassName = clsx(
		'relative px-sm z-100 top-0 flex items-center justify-between w-full gap-2 py-3 lg:py-4 bg-off-white',
	);

	const logoClassName = clsx(
		'h-5.5 xs:h-6 hover:opacity-85  text-black',
	);

	return (
		<nav className={navigationClassName}>
			<div className='flex flex-row items-center justify-center gap-8'>
				<Link
					href={ROUTES.ADMIN}
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
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-row items-center gap-6'>
				<LogoutButton className='hidden lg:flex' />
				<MenuButton
					className='lg:hidden'
					isOpen={isOpen}
					onClick={toggleNavMenu}
				/>
			</div>

			{isOpen && (
				<div className='absolute top-full left-0 w-full bg-off-white px-sm py-6 lg:hidden'>
					<ul className='flex flex-col gap-4'>
						{LINKS.map((link) => {
							return (
								<li key={link.href}>
									<NavLinkMobile
										href={link.href}
										text={link.label}
										isActive={link.href === pathname}
										onClick={() => setIsOpen(false)}
									/>
								</li>
							);
						})}
						<li className='pt-6 w-full'>
							<LogoutButton />
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}