import Link from 'next/link';
import clsx from 'clsx';

type NavLinkDesktopProps = {
	href: string;
	text: string;
	isActive: boolean;
	isBlank?: boolean;
	className?: string;
};

const NavLinkDesktop = ({
	href,
	text,
	isActive,
	isBlank,
	className,
}: NavLinkDesktopProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				'group relative block cursor-pointer uppercase px-px',
				'font-sans text-[0.875rem] tracking-widest font-medium leading-5',
				'transition-colors ease-editorial',
				isBlank ? 'text-off-white' : 'text-black',
				className,
			)}
		>
			<span className='relative block overflow-hidden'>
				<span className='block transition-transform ease-editorial group-hover:-translate-y-full group-focus-visible:-translate-y-full'>
					{text}
				</span>

				<span
					className='absolute inset-0 block translate-y-full transition-transform ease-editorial group-hover:translate-y-0 group-focus-visible:translate-y-0'
					aria-hidden='true'
				>
					{text}
				</span>
			</span>

			<span
				aria-hidden='true'
				className={clsx(
					'absolute -bottom-0.5 left-0 h-px',
					'transition-[width,background-color] ease-editorial',
					isBlank ? 'bg-off-white' : 'bg-black',
					isActive
						? 'w-full'
						: 'w-0 group-hover:w-full group-focus-visible:w-full',
				)}
			/>
		</Link>
	);
};

export default NavLinkDesktop;
