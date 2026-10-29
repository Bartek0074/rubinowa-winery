'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { z } from 'zod';

import { Label, Input, Button } from '@/src/components/atoms';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { wineSchema } from '@/src/libs/validation/wine';

import type { SupabaseWine } from '@/src/libs/types';

import { ROUTES } from '@/src/libs/routes';

type WineFormType = {
    initialData?: SupabaseWine;
};

export default function WineForm({ initialData }: WineFormType) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof wineSchema>>({
        mode: 'onTouched',
        resolver: zodResolver(wineSchema),
        defaultValues: {
            name: initialData?.name ?? '',
            price: initialData?.price ?? 0,
            vintage: initialData?.vintage ?? new Date().getFullYear(),
            volume_ml: initialData?.volume_ml ?? 750,
        }
    });

    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<Error | null>(null);


    const isEditing = Boolean(initialData?.id);

    const onSubmit = async (data: z.infer<typeof wineSchema>) => {
        setIsSaving(true);
        setError(null);

        try {
            if (isEditing) {
                const id = initialData?.id;

                if (id) {
                    console.log({
                        type: 'update',
                        id,
                        name: data.name,
                        price: data.price,
                        vintage: data.vintage,
                        volume_ml: data.volume_ml,
                    });
                    // await updateWine(id, {
                    //     name: data.name,
                    //     price: data.price,
                    //     vintage: data.vintage,
                    //     volume_ml: data.volume_ml,
                    // });
                } else {
                    throw new Error('Missing transaction ID for update');
                }
            } else {
                console.log({
                    type: 'create',
                    name: data.name,
                    price: data.price,
                    vintage: data.vintage,
                    volume_ml: data.volume_ml,
                })
                // await createWine({
                //     name: data.name,
                //     price: data.price,
                //     vintage: data.vintage,
                //     volume_ml: data.volume_ml,
                // });
            }

            // router.push(ROUTES.ADMIN_WINES);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='col-span-1 md:col-span-2'>
                    <Label className='mb-1'>Nazwa</Label>
                    <Input {...register('name')} type='text' />
                    {/* <FormError message={errors.name?.message as string} /> */}
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    {error?.message && <p>{error.message}</p>}
                </div>
                <Button variant='outline' type='submit' loading={isSaving}>
                    {isEditing ? 'Edytuj' : 'Dodaj'}
                </Button>
            </div>
        </form>
    );
}
