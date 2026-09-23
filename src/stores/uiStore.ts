import { create } from 'zustand';

type UiStore = {
	isCartOpen: boolean;
	isNavMenuOpen: boolean;

	openCart: () => void;
	closeCart: () => void;

	openNavMenu: () => void;
	closeNavMenu: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
	isCartOpen: false,
	isNavMenuOpen: false,

	openCart: () => set({ isCartOpen: true }),
	closeCart: () => set({ isCartOpen: false }),

	openNavMenu: () => set({ isNavMenuOpen: true }),
	closeNavMenu: () => set({ isNavMenuOpen: false }),
}));
