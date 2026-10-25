import NextLink from 'next/link';

import clsx from 'clsx';

import type { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

const Link = ({ children, className, ...props }: LinkProps) => (
    <NextLink
        {...props}
        className={clsx(
            'font-sans text-caption font-normal text-black',
            'transition-colors ease-editorial',
            'hover:text-black-muted',
            className,
        )}
    >
        {children}
    </NextLink>
);

export default Link;
