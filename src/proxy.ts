import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './libs/supabase/proxy';
import { createClient } from './libs/supabase/server';

import { ROUTES } from './libs/routes';


export async function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	const supabase = await createClient();
	
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const isAdminRoute = pathname === ROUTES.ADMIN || pathname.startsWith(ROUTES.ADMIN);
	const isLoginRoute = pathname === ROUTES.ADMIN_LOGIN;

	if (!user && isAdminRoute && !isLoginRoute) {
		return Response.redirect(new URL(ROUTES.ADMIN_LOGIN, request.url));
	}

	if (user && isLoginRoute) {
		return Response.redirect(new URL(ROUTES.ADMIN, request.url));
	}

	return await updateSession(request);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};
