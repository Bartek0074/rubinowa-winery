'use client';

import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

import Button from '../Button';

type SubmitButtonProps = {
    variant: 'light' | 'dark' | 'outline';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SubmitButton({variant, ...props }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button {...props} type="submit" variant={variant} loading={pending} className={props.className}>
            {props.children}
        </Button>
    );
}
