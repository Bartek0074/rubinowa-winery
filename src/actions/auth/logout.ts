'use server';

import { createClient } from '@/src/libs/supabase/server';

import { redirect } from 'next/navigation';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

export async function logout() {
	const supabase = await createClient();

	const { error } = await supabase.auth.signOut();

	if (error) {
		throw new Error(hardcodedContent.messages.logout.error.somethingWentWrong);
	}

	redirect(ROUTES.ADMIN_LOGIN);
}
