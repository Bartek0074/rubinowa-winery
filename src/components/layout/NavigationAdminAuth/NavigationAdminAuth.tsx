import clsx from 'clsx';
import Link from 'next/link';

import { LogoWoodmark } from '@/src/components/icons';
import { ROUTES } from '@/src/libs/routes';

export default function NavigationAdminAuth() {
	const navigationClassName = clsx(
		'relative px-sm z-100 top-0 flex items-center justify-between w-full gap-2 py-4.5 lg:py-7 bg-off-white',
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
			</div>
		</nav>
	);
}