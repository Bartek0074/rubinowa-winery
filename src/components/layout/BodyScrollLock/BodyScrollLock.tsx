'use client';

import { useEffect } from 'react';

import { useUiStore } from '@/src/stores/uiStore';

const BodyScrollLock = () => {
    const { isCartOpen, isNavMenuOpen } = useUiStore();

    useEffect(() => {
        const shouldLockScroll = isCartOpen || isNavMenuOpen;

        document.body.style.overflow = shouldLockScroll ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isCartOpen, isNavMenuOpen]);

    return null;
};

export default BodyScrollLock;