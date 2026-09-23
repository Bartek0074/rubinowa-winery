import clsx from 'clsx';

type MenuButtonProps = {
	isOpen: boolean;
	onClick: () => void;
	isBlack?: boolean;
	className?: string;
};

const MenuButton = ({ isOpen, onClick, isBlack, className }: MenuButtonProps) => {
	const topLineClasses = clsx(
		'h-0.5 w-full rounded-full transition-all ease-editorial',
		isBlack ? 'bg-black' : 'bg-off-white',
		isOpen ? 'rotate-45 translate-y-2.25 lg:translate-y-2' : '',
	);

	const middleLineClasses = clsx(
		'h-0.5 w-full rounded-full transition-all ease-editorial',
		isBlack ? 'bg-black' : 'bg-off-white',
		isOpen ? 'opacity-0' : '',
	);

	const bottomLineClasses = clsx(
		'h-0.5 w-full rounded-full transition-all ease-editorial',
		isBlack ? 'bg-black' : 'bg-off-white',
		isOpen ? '-rotate-45 -translate-y-2.25 lg:-translate-y-2' : '',
	);

	return (
		<button
			type='button'
			className={`flex flex-col items-center justify-center w-9 h-9 lg:w-8 lg:h-8 gap-1.75 lg:gap-1.5 cursor-pointer hover:opacity-85 transition-opacity ease-editorial ${className ?? ''}`}
			onClick={onClick}
			aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
			aria-expanded={isOpen}
			aria-controls='mobile-navigation'
		>
			<div className={topLineClasses} aria-hidden='true' />
			<div className={middleLineClasses} aria-hidden='true' />
			<div className={bottomLineClasses} aria-hidden='true' />
		</button>
	);
};

export default MenuButton;
