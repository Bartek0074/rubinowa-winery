import Link from 'next/link';
import clsx from 'clsx';

type NavLinkMobileProps = {
	href: string;
	text: string;
	isActive: boolean;
	className?: string;
};

const NavLinkMobile = ({
	href,
	text,
	isActive,
	className,
}: NavLinkMobileProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				'cursor-pointer uppercase font-sans text-[1.375rem] tracking-[0.12rem] font-medium transition-opacity ease-editorial',
				isActive
					? 'text-black-muted opacity-90 hover:opacity-80'
					: 'text-black hover:opacity-90',
				className,
			)}
		>
			{text}
		</Link>
	);
};

export default NavLinkMobile;
