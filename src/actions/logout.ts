'use server';

import { createClient } from '@/src/libs/supabase/server';

import { redirect } from 'next/navigation';

import { ROUTES } from '@/src/libs/routes';

export async function logout() {
	const supabase = await createClient();

	const { error } = await supabase.auth.signOut();

	if (error) {
		throw new Error('Failed signing out');
	}

	redirect(ROUTES.ADMIN_LOGIN);
}
