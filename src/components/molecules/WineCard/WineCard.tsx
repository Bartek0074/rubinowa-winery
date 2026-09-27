

import { type SanityImageSource } from '@sanity/image-url';

import Link from 'next/link';
import Image from 'next/image';
import Controls from './Controls';

import { urlFor } from '@/src/sanity/lib/image';

type WineCardProps = {
    name: string;
    vintage: string;
    price: number;
    volume: string;
    img: SanityImageSource;
    alt: string;
}

const WineCard = ({ name, vintage, price, volume, img, alt }: WineCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href="#" className='relative w-full aspect-3/4 cursor-pointer group'>
                <Image src={urlFor(img).url()} alt={alt} fill className='absolute inset-0 object-contain group-hover:-translate-y-3 transition-transform ease-editorial' />
            </Link>
            <div className='mt-4'>
                <h3 className='text-h3 text-center'>
                    {name} {vintage}
                </h3>
                <div className='mt-3 flex gap-3 justify-center'>
                    <p className='text-small'>{price} zł</p>
                    <span className='text-small'>|</span>
                    <p className='text-small'>{volume}</p>
                </div>
            </div>
            <Controls id='id-to-do' className='mt-8' />
        </div>
    );
};

export default WineCard;