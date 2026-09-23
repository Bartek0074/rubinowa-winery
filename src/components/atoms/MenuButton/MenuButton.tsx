import clsx from 'clsx';

type MenuButtonProps = {
	isOpen: boolean;
	onClick: () => void;
};

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
	const topLineClasses = clsx(
		'h-0.5 w-full rounded-full bg-black transition-all duration-200',
		isOpen ? 'rotate-45 translate-y-2' : '',
	);

	const middleLineClasses = clsx(
		'h-0.5 w-full rounded-full bg-black transition-all duration-200',
		isOpen ? 'opacity-0' : '',
	);

	const bottomLineClasses = clsx(
		'h-0.5 w-full rounded-full bg-black transition-all duration-200',
		isOpen ? '-rotate-45 -translate-y-2' : '',
	);

	return (
		<button
			className='flex flex-col items-center justify-center w-8 h-8 gap-1.5 cursor-pointer'
			onClick={onClick}
			aria-label='Toggle menu'
		>
			<div className={topLineClasses} />
			<div className={middleLineClasses} />
			<div className={bottomLineClasses} />
		</button>
	);
};

export default MenuButton;
