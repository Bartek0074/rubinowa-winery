import clsx from 'clsx';

import type { InputHTMLAttributes } from 'react';

type InputProps = {
	className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
	const inputClassName = clsx(
		'h-12 w-full',
		'px-6',
		'border border-black bg-transparent',
		'font-sans text-[1rem] text-black',
		'placeholder:text-black-muted',
		'outline-none',
		'transition-[border-color,background-color] ease-editorial',
		'focus:border-primary-600',
		'disabled:cursor-not-allowed disabled:opacity-60',
		className,
	);

	return <input {...props} className={inputClassName} />;
};

export default Input;