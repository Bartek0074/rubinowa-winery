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

    ADMIN_DELIVERY_METHODS: "/admin/metody-dostawy",
    ADMIN_DELIVERY_METHOD_DETAILS: (id: string) => `/admin/metody-dostawy/${id}`,
    ADMIN_DELIVERY_METHOD_CREATE: "/admin/metody-dostawy/new",
    ADMIN_DELIVERY_METHOD_EDIT: (id: string) => `/admin/metody-dostawy/${id}/edycja`,

    STUDIO_WINES: "/studio/structure/wina",
    STUDIO_WINE: (id: string) => `/studio/structure/wina;${id}`,
};