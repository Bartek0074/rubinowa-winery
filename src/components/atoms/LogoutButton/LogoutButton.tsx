'use client';

import { logout } from '@/src/actions/logout';

import SubmitButton from '../SubmitButton';

type LogoutButtonProps = {
    className?: string;
}

export default function LogoutButton({ className }: LogoutButtonProps) {
    return (
        <form action={logout} className={className}>
            <SubmitButton variant='outline' className={'w-full xs:w-fit'}>
                Wyloguj się
            </SubmitButton>
        </form>);
}
