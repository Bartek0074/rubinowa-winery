export const ROUTES = {
	HOME: "/",
    ABOUT: "/o-nas",
    VINEYARD: "/winnica",
    WINES: "/wina",
    BLOG: "/blog",
    CONTACT: "/kontakt",
    
    ADMIN: "/admin",
    ADMIN_LOGIN: "/admin/login",
    ADMIN_WINES: "/admin/wina",
    ADMIN_WINE_DETAILS: (id: string) => `/admin/wina/${id}`,
    ADMIN_WINE_CREATE: "/admin/wina/nowe",
    ADMIN_WINE_EDIT: (id: string) => `/admin/wina/${id}/edycja`,

    STUDIO_WINES: "/studio/structure/wina",
    STUDIO_WINE: (id: string) => `/studio/structure/wina;${id}`,
};