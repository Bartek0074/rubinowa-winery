'use client';

import { ButtonHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from '@tabler/icons-react';
import { useFormStatus } from 'react-dom';

import ButtonIcon from '../ButtonIcon';

type SubmitButtonIconProps = {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    variant: 'light' | 'dark' | 'outline';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SubmitButtonIcon({ icon, variant, ...props }: SubmitButtonIconProps) {
    const { pending } = useFormStatus();

    return (
        <ButtonIcon icon={icon} {...props} type="submit" variant={variant} loading={pending} className={props.className} />
    );
}
