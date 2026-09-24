import Link from 'next/link';

import clsx from 'clsx';

import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from 'react';

const variants = {
	dark: 'border-black bg-black text-off-white hover:border-primary-600 hover:bg-primary-600',
	light:
		'border-off-white bg-off-white text-black hover:text-off-white hover:border-primary-600 hover:bg-primary-600',
	outline:
		'border-black bg-transparent text-black hover:bg-black hover:text-off-white',
};

type ButtonVariant = keyof typeof variants;

const getButtonClassName = (variant: ButtonVariant, className?: string) =>
	clsx(
		'group relative block cursor-pointer uppercase',
		'px-6 py-3 w-fit',
		'font-sans text-[0.875rem] font-semibold tracking-widest leading-5 text-center',
		'border',
		'transition-colors ease-editorial',
		variants[variant],
		className,
	);

type ButtonContentProps = {
	children: ReactNode;
};

const ButtonContent = ({ children }: ButtonContentProps) => (
	<span className='relative block overflow-hidden'>
		<span className='block transition-transform ease-editorial group-hover:-translate-y-full group-focus-visible:-translate-y-full'>
			{children}
		</span>

		<span
			aria-hidden='true'
			className='absolute inset-0 block translate-y-full transition-transform ease-editorial group-hover:translate-y-0 group-focus-visible:translate-y-0'
		>
			{children}
		</span>
	</span>
);

type ButtonProps = {
	variant: ButtonVariant;
	children: ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({
	variant,
	children,
	className,
	...props
}: ButtonProps) => (
	<button {...props} className={getButtonClassName(variant, className)}>
		<ButtonContent>{children}</ButtonContent>
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
