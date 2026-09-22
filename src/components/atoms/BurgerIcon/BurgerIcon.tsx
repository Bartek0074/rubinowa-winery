import clsx from 'clsx';

type BurgerIconProps = {
	isOpen: boolean;
	onClick: () => void;
};

const BurgerIcon = ({ isOpen, onClick }: BurgerIconProps) => {
	const topLineClasses = clsx(
		'h-0.5 w-full rounded-full bg-black transition-all duration-200',
		isOpen ? 'translate-x-8 opacity-0' : '',
	);

	const bottomLineClasses = clsx(
		'h-0.5 w-full rounded-full bg-black transition-all duration-200',
		isOpen ? '-translate-x-8 opacity-0' : '',
	);
	return (
		<button
			className='flex flex-col items-center justify-center w-10 h-8 gap-1.5 cursor-pointer'
			onClick={onClick}
			aria-label='Toggle menu'
		>
			<div className={topLineClasses} />
			<div className={'h-0.5 w-full rounded-full bg-black'} />
			<div className={bottomLineClasses} />
		</button>
	);
};

export default BurgerIcon;
