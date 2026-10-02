'use client';

import clsx from 'clsx';

import { useActionState } from 'react';

import { Input, SubmitButton, Label } from '@/src/components/atoms';

import { type LoginState, login } from '@/src/actions/login';

const initialState: LoginState = {
	message: '',
	error: false,
};

export default function LoginForm() {
	const [state, formAction] = useActionState(login, initialState);

	return (
		<form action={formAction} className='flex flex-col gap-4 w-full sm:w-1/2 max-w-120 p-4'>
			<div className='flex flex-col space-y-1'>
				<Label htmlFor='email' required>Email</Label>
				<Input
					id='email'
					type='email'
					name='email'
					autoComplete='email'
					placeholder='Adres email'
					required
				/>
			</div>
			<SubmitButton type='submit' variant='dark' className='w-full'>
				Zaloguj się
			</SubmitButton>
			{state.message && (
				<p
					aria-live='polite'
					className={clsx(
						'text-small text-left',
						state.error ? 'text-error' : 'text-success',
					)}
				>
					{state.message}
				</p>
			)}
		</form>
	);
}
