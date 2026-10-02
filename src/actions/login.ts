'use server';

import { createClient } from '@/src/libs/supabase/server';
import { loginSchema } from '@/src/libs/validation/auth';

export type LoginState = {
	error: boolean;
	message: string;
};

export async function login(_prevState: LoginState, formData: FormData) {
	const validated = loginSchema.safeParse({ email: formData.get('email') });

	if (!validated.success) {
		return {
			error: true,
			message: 'Nieprawidłowy adres email',
		};
	}

	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithOtp({
		email: validated.data.email,
		options: {
			shouldCreateUser: false,
		},
	});

	if (error) {
		return {
			error: true,
			message: 'Coś poszło nie tak, spróbuj ponownie później',
		};
	}

	return {
		error: false,
		message: `Wysłano wiadomość na adres ${validated.data.email}. Sprawdź swoją skrzynkę pocztową.`,
	};
}
