import Link from 'next/link';

import clsx from 'clsx';

import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from 'react';

const variants = {
	dark:
		'border-black bg-black text-off-white ' +
		'hover:border-primary-600 hover:bg-primary-600 ' +
		'disabled:border-black disabled:bg-black disabled:text-off-white',
	light:
		'border-off-white bg-off-white text-black ' +
		'hover:text-off-white hover:border-primary-600 hover:bg-primary-600 ' +
		'disabled:border-off-white disabled:bg-off-white disabled:text-black',
	outline:
		'border-black bg-transparent text-black ' +
		'hover:bg-black hover:text-off-white ' +
		'disabled:border-black disabled:bg-transparent disabled:text-black',
};

type ButtonVariant = keyof typeof variants;

const getButtonClassName = (variant: ButtonVariant, className?: string) =>
	clsx(
		'group relative block',
		'px-6 py-3 w-fit',
		'font-sans text-[0.875rem] font-semibold tracking-widest leading-5 text-center uppercase',
		'border cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed',
		'transition-[color,background-color,border-color] ease-editorial',
		variants[variant],
		className,
	);

type ButtonContentProps = {
	loading?: boolean;
	children: ReactNode;
};

const ButtonContent = ({ loading = false, children }: ButtonContentProps) => (
	<span className='relative block overflow-hidden'>
		<span
			className={clsx(
				'block transition-transform ease-editorial',
				loading
					? 'translate-y-full'
					: 'group-hover:-translate-y-full group-focus-visible:-translate-y-full',
			)}
		>
			{children}
		</span>
		<span
			aria-hidden='true'
			className={clsx(
				'absolute inset-0 block translate-y-full transition-transform ease-editorial',
				loading
					? 'translate-y-full'
					: 'group-hover:translate-y-0 group-focus-visible:translate-y-0',
			)}
		>
			{children}
		</span>
		<span
			aria-hidden='true'
			className={clsx(
				'absolute inset-0 flex -translate-y-full items-center justify-center transition-transform ease-editorial',
				loading && 'translate-y-0',
			)}
		>
			<span className='size-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
		</span>
	</span>
);

type ButtonProps = {
	variant: ButtonVariant;
	loading?: boolean;
	children: ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({
	variant,
	children,
	className,
	loading,
	...props
}: ButtonProps) => (
	<button
		{...props}
		type={props.type ?? 'button'}
		disabled={props.disabled || loading}
		aria-busy={loading}
		className={getButtonClassName(variant, className)}
	>
		<ButtonContent loading={loading}>{children}</ButtonContent>
	</button>
);

type ButtonLinkProps = {
	variant: ButtonVariant;
	children: ReactNode;
	className?: string;
} & React.ComponentProps<typeof Link>;

const ButtonLink = ({
	variant,
	children,
	className,
	...props
}: ButtonLinkProps) => (
	<Link {...props} className={getButtonClassName(variant, className)}>
		<ButtonContent>{children}</ButtonContent>
	</Link>
);

type ButtonAnchorProps = {
	variant: ButtonVariant;
	children: ReactNode;
	className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonAnchor = ({
	variant,
	children,
	className,
	...props
}: ButtonAnchorProps) => (
	<a {...props} className={getButtonClassName(variant, className)}>
		<ButtonContent>{children}</ButtonContent>
	</a>
);

const Button = Object.assign(ButtonComponent, {
	Link: ButtonLink,
	Anchor: ButtonAnchor,
});

export default Button;
