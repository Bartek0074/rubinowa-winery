import React from 'react';
import type {
	ForwardRefExoticComponent, RefAttributes, AnchorHTMLAttributes,
	ButtonHTMLAttributes,
} from 'react';
import type { IconProps } from '@tabler/icons-react';

import Link from 'next/link';

import clsx from 'clsx';

const variants = {
	dark:
		'border-black bg-black text-off-white ' +
		'hover:border-primary-600 hover:bg-primary-600 ' +
		'active:border-primary-600 active:bg-primary-600 ' +
		'disabled:border-black disabled:bg-black disabled:text-off-white',
	light:
		'border-off-white bg-off-white text-black ' +
		'hover:text-off-white hover:border-primary-600 hover:bg-primary-600 ' +
		'active:text-off-white active:border-primary-600 active:bg-primary-600 ' +
		'disabled:border-off-white disabled:bg-off-white disabled:text-black',
	outline:
		'border-black bg-transparent text-black ' +
		'hover:bg-black hover:text-off-white ' +
		'active:bg-black active:text-off-white ' +
		'disabled:border-black disabled:bg-transparent disabled:text-black',
};

type ButtonVariant = keyof typeof variants;

const getButtonClassName = (variant: ButtonVariant, className?: string) =>
	clsx(
		'relative inline-flex size-12 shrink-0 items-center justify-center',
		'border cursor-pointer',
		'transition-[color,background-color,border-color] ease-editorial',
		'disabled:cursor-not-allowed disabled:opacity-80',
		'focus-visible:outline focus-visible:outline-2',
		'focus-visible:outline-offset-2 focus-visible:outline-primary-600',
		variants[variant],
		className,
	);

type ButtonContentProps = {
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	loading?: boolean;
};

const IconElement = ({ icon, className, strokeWidth }: { icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>; className?: string; strokeWidth?: number }) =>
	icon ? React.createElement(icon, { className, strokeWidth }) : null;

const ButtonContent = ({ icon, loading = false }: ButtonContentProps) => (
	<span className='relative flex size-6 items-center justify-center overflow-hidden'>
		<IconElement
			icon={icon}
			className={clsx(
				'size-6 transition-transform ease-editorial',
				loading && 'translate-y-full',
			)}
			strokeWidth={1.5}
		/>

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
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	loading?: boolean;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({
	variant,
	icon,
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
		<ButtonContent icon={icon} loading={loading} />
	</button>
);

type ButtonLinkProps = {
	variant: ButtonVariant;
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	className?: string;
} & React.ComponentProps<typeof Link>;

const ButtonLink = ({
	variant,
	icon,
	className,
	...props
}: ButtonLinkProps) => (
	<Link {...props} className={getButtonClassName(variant, className)}>
		<ButtonContent icon={icon} />
	</Link>
);

type ButtonAnchorProps = {
	variant: ButtonVariant;
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonAnchor = ({
	variant,
	icon,
	className,
	...props
}: ButtonAnchorProps) => (
	<a {...props} className={getButtonClassName(variant, className)}>
		<ButtonContent icon={icon} />
	</a>
);

const Button = Object.assign(ButtonComponent, {
	Link: ButtonLink,
	Anchor: ButtonAnchor,
});

export default Button;
