'use server';

import { createClient } from '@/src/libs/supabase/server';
import { loginSchema } from '@/src/libs/validation/auth';

import { hardcodedContent } from '@/src/libs/global-content';

export type LoginState = {
	error: boolean;
	message: string;
};

export async function login(_prevState: LoginState, formData: FormData) {
	const validated = loginSchema.safeParse({ email: formData.get('email') });

	if (!validated.success) {
		return {
			error: true,
			message: hardcodedContent.messages.login.error.invalidEmail,
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
			message: hardcodedContent.messages.login.error.somethingWentWrong,
		};
	}

	return {
		error: false,
		message: hardcodedContent.messages.login.success.emailSent(
			validated.data.email,
		),
	};
}
