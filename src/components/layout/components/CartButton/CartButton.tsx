import { IconShoppingBag } from '@tabler/icons-react';

type CartButtonProps = {
	onClick: () => void;
	isBlank?: boolean;
	className?: string;
};

const CartButton = ({ onClick, isBlank, className }: CartButtonProps) => {
	return (
		<button
			type='button'
			className={`hover:opacity-85 transition-opacity ease-editorial cursor-pointer ${className ?? ''}`}
			onClick={onClick}
			aria-label='Otwórz koszyk'
			aria-controls='cart-overlay'
		>
			<IconShoppingBag
				className={`w-9 h-9 lg:w-8 lg:h-8 transition-colors ease-editorial ${isBlank ? 'text-off-white' : 'text-black'}`}
				strokeWidth={1.25}
			/>
		</button>
	);
};

export default CartButton;
