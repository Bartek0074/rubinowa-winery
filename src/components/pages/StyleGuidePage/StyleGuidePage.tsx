'use client'

import { useState } from 'react';

import { IconPlus, IconMinus, IconShoppingBag } from '@tabler/icons-react';

import { MenuButton } from '@/src/components/atoms';

type StyleGuidePageProps = {};

const ColorBox = ({ colorClassName }: { colorClassName: string }) => {
    const getContrastColor = () => {
        const isPrimaryOrSecondary = colorClassName.startsWith('bg-primary-') || colorClassName.startsWith('bg-secondary-');

        if (isPrimaryOrSecondary) {
            if (colorClassName.split('-').length === 3) {
                const shade = parseInt(colorClassName.split('-')[2], 10);
                if (shade <= 400) {
                    return 'text-black';
                }
            }
            else {
                return 'text-white';
            }
        }


        if (colorClassName === 'bg-white' || colorClassName === 'bg-off-white' || colorClassName === 'bg-beige') {
            return 'text-black';
        }
        return 'text-white';
    }
    return (
        <div
            className={`group flex items-center justify-center w-30 h-30 border border-black ${colorClassName}`}
        >
            <p className={`text-caption text-[0.75rem] ${getContrastColor()} font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-150`}>
                {colorClassName.split('-').slice(1).join('-')}
            </p>
        </div>
    );
};

const StyleGuidePage = ({ }: StyleGuidePageProps) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <div className='flex flex-col gap-16 px-16 py-12'>
            <section className='flex flex-col gap-4'>
                <h2 className='text-h2 uppercase underline text-black'>Typografia</h2>
                <div className='flex flex-col gap-2'>
                    <p className='text-display text-black'>Lorem ipsum</p>
                    <h1 className='text-h1 text-black'>Lorem ipsum</h1>
                    <h2 className='text-h2 text-black'>Lorem ipsum</h2>
                    <h3 className='text-h3 text-black'>Lorem ipsum</h3>
                    <h4 className='text-h4 text-black'>Lorem ipsum</h4>
                    <p className='text-lead text-black'>Lorem ipsum</p>
                    <p className='text-body text-black'>Lorem ipsum</p>
                    <p className='text-small text-black'>Lorem ipsum</p>
                    <p className='text-caption text-black'>Lorem ipsum</p>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <h2 className='text-h2 uppercase underline text-black'>Kolory</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center  gap-2">
                        <ColorBox colorClassName='bg-white' />
                        <ColorBox colorClassName='bg-off-white' />
                        <ColorBox colorClassName='bg-beige' />
                        <ColorBox colorClassName='bg-black-muted' />
                        <ColorBox colorClassName='bg-black' />
                    </div>
                    <div className="flex flex-row items-center  gap-2">
                        <ColorBox colorClassName='bg-primary-50' />
                        <ColorBox colorClassName='bg-primary-100' />
                        <ColorBox colorClassName='bg-primary-200' />
                        <ColorBox colorClassName='bg-primary-300' />
                        <ColorBox colorClassName='bg-primary-400' />
                        <ColorBox colorClassName='bg-primary-500' />
                        <ColorBox colorClassName='bg-primary-600' />
                        <ColorBox colorClassName='bg-primary-700' />
                        <ColorBox colorClassName='bg-primary-800' />
                        <ColorBox colorClassName='bg-primary-900' />
                    </div>
                    <div className="flex flex-row items-center  gap-2">
                        <ColorBox colorClassName='bg-secondary-50' />
                        <ColorBox colorClassName='bg-secondary-100' />
                        <ColorBox colorClassName='bg-secondary-200' />
                        <ColorBox colorClassName='bg-secondary-300' />
                        <ColorBox colorClassName='bg-secondary-400' />
                        <ColorBox colorClassName='bg-secondary-500' />
                        <ColorBox colorClassName='bg-secondary-600' />
                        <ColorBox colorClassName='bg-secondary-700' />
                        <ColorBox colorClassName='bg-secondary-800' />
                        <ColorBox colorClassName='bg-secondary-900' />
                    </div>
                    <div className="flex flex-row items-center  gap-2">
                        <ColorBox colorClassName='bg-success' />
                        <ColorBox colorClassName='bg-error' />
                        <ColorBox colorClassName='bg-warning' />
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <h2 className='text-h2 uppercase underline text-black'>Ikony</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <div className='flex items-center justify-center w-16 h-16 border border-black'>
                            <IconPlus className='w-8 h-8' strokeWidth={1.5} />
                        </div>
                        <div className='flex items-center justify-center w-16 h-16 border border-black'>
                            <IconMinus className='w-8 h-8' strokeWidth={1.5} />
                        </div>
                        <div className='flex items-center justify-center w-16 h-16 border border-black'>
                            <IconShoppingBag className='w-8 h-8' strokeWidth={1.5} />
                        </div>
                        <div className='flex items-center justify-center w-16 h-16 border border-black'>
                            <MenuButton isOpen={isBurgerOpen} onClick={toggleBurger} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StyleGuidePage;
