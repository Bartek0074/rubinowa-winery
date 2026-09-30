'use client';

import { useState } from 'react';

import Button from '@/src/components/atoms/Button';

import { IconPlus, IconMinus } from '@tabler/icons-react';

type ControlsProps = {
	id: string;
	className?: string;
};

const MAX_QUANTITY = 99;

const Controls = ({ id, className }: ControlsProps) => {
	const [quantity, setQuantity] = useState(1);

	const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);

		if (!Number.isInteger(value)) return;
		if (value < 1 || value > MAX_QUANTITY) return;

		setQuantity(value);
	};

	const onIncrease = () => {
		if (quantity >= MAX_QUANTITY) return;
		setQuantity((prev) => prev + 1);
	};

	const onDecrease = () => {
		if (quantity <= 1) return;
		setQuantity((prev) => prev - 1);
	};

	const onAddToCart = () => {
		console.log(id);
		console.log(quantity);
	};

	const buttonClass =
		'group flex items-center justify-center h-12 aspect-square border border-r-0 bg-transparent hover:bg-black transition-colors ease-editorial cursor-pointer';

	const iconClass =
		'h-6 text-black group-hover:text-off-white transition-colors ease-editorial';

	return (
		<div className={`flex flex-row justify-center ${className ?? ''}`}>
			<button
				className={buttonClass}
				onClick={onDecrease}
				disabled={quantity <= 1}
				aria-label='Zmniejsz'
			>
				<IconMinus className={iconClass} strokeWidth={1.5} />
			</button>
			<div className='relative h-12 aspect-square border border-r-0'>
				<input
					type='number'
					value={quantity}
					onChange={onChangeQuantity}
					className='absolute w-full h-full text-center font-sans text-[0.9325rem] font-medium tracking-widest leading-5 border-none outline-none'
				/>
			</div>
			<button
				className={buttonClass}
				onClick={onIncrease}
				disabled={quantity >= MAX_QUANTITY}
				aria-label='Zwiększ'
			>
				<IconPlus className={iconClass} strokeWidth={1.5} />
			</button>
			<Button variant='outline' className='w-full' onClick={onAddToCart}>
				Dodaj do koszyka
			</Button>
		</div>
	);
};

export default Controls;
