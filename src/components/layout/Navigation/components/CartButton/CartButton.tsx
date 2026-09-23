import { IconShoppingBag } from '@tabler/icons-react';

type CartButtonProps = {
	onClick: () => void;
	className?: string;
};

const CartButton = ({ onClick, className }: CartButtonProps) => {
	return (
		<button
			type='button'
			className={`hover:opacity-85 transition-colors duration-200 cursor-pointer ${className ?? ''}`}
			onClick={onClick}
			aria-label='Otwórz koszyk'
			aria-controls='cart-overlay'
		>
			<IconShoppingBag className='w-9 h-9 lg:w-8 lg:h-8 text-black' strokeWidth={1.5} />
		</button>
	);
};

export default CartButton;
