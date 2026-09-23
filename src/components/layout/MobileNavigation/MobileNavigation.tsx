'use client';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useUiStore } from '@/src/stores/uiStore';

gsap.registerPlugin(useGSAP);

const MobileNavigation = () => {
    const drawerRef = useRef<HTMLDivElement>(null);

    const isNavMenuOpen = useUiStore((state) => state.isNavMenuOpen);

    useGSAP(
        () => {
            gsap.to(drawerRef.current, {
                xPercent: isNavMenuOpen ? 0 : 100,
                duration: 0.5,
                ease: 'power4.inOut',
            });
        },
        {
            dependencies: [isNavMenuOpen],
            scope: drawerRef,
        },
    );

    return (
        <div
            ref={drawerRef}
            id='mobile-navigation'
            className='fixed z-90 inset-x-0 top-17 bottom-0 bg-off-white lg:hidden'
        />
    );
};

export default MobileNavigation;