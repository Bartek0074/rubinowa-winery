'use client';

import { useState } from 'react';

import { Button, ButtonIcon } from '@/src/components/atoms';

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
		'border-r-0';

	return (
		<div className={`flex flex-row justify-center ${className ?? ''}`}>
			<ButtonIcon
				variant='outline'
				icon={IconMinus}
				className={buttonClass}
				onClick={onDecrease}
				disabled={quantity <= 1}
				aria-label='Zmniejsz'
			/>
			<div className='relative h-12 aspect-square border border-r-0'>
				<input
					type='number'
					value={quantity}
					onChange={onChangeQuantity}
					className='absolute w-full h-full text-center font-sans text-[0.9325rem] font-medium tracking-widest leading-5 border-none outline-none'
				/>
			</div>
			<ButtonIcon
				variant='outline'
				icon={IconPlus}
				className={buttonClass}
				onClick={onIncrease}
				disabled={quantity >= MAX_QUANTITY}
				aria-label='Zwiększ'
			/>
			<Button variant='outline' className='w-full' onClick={onAddToCart}>
				Dodaj do koszyka
			</Button>
		</div>
	);
};

export default Controls;
