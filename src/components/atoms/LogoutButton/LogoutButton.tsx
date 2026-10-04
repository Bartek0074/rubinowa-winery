'use client';

import { logout } from '@/src/actions/logout';

import { IconLogout } from '@tabler/icons-react';

import SubmitButtonIcon from '../SubmitButtonIcon';

type LogoutButtonProps = {
    className?: string;
}

export default function LogoutButton({ className }: LogoutButtonProps) {
    return (
        <form action={logout}>
            <SubmitButtonIcon icon={IconLogout} className={className} variant='outline' aria-label='Wyloguj się' />
        </form>);
}
