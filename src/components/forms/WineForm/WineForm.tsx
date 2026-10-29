'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { z } from 'zod';

import { Label, Input, Button, FormError } from '@/src/components/atoms';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { wineSchema } from '@/src/libs/validation/wine';

import type { SupabaseWine } from '@/src/libs/types';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

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
        },
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
                });
                // await createWine({
                //     name: data.name,
                //     price: data.price,
                //     vintage: data.vintage,
                //     volume_ml: data.volume_ml,
                // });
            }

            router.push(ROUTES.ADMIN_WINES);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8'>
                <div className='col-span-1'>
                    <Label htmlFor='name' className='mb-1'>
                        {hardcodedContent.forms.wineForm.name.label}
                    </Label>
                    <Input {...register('name')} id='name' type='text' />
                    <FormError message={errors.name?.message} className='mt-1' />
                </div>
                <div className='col-span-1'>
                    <Label htmlFor='price' className='mb-1'>
                        {hardcodedContent.forms.wineForm.price.label}
                    </Label>
                    <Input
                        {...register('price', {
                            valueAsNumber: true,
                        })}
                        id='price'
                        type='number'
                        step='0.01'
                    />
                    <FormError message={errors.price?.message} className='mt-1' />
                </div>
                <div className='col-span-1'>
                    <Label htmlFor='vintage' className='mb-1'>
                        {hardcodedContent.forms.wineForm.vintage.label}
                    </Label>
                    <Input
                        {...register('vintage', { valueAsNumber: true })}
                        id='vintage'
                        type='number'
                        step={1}
                    />
                    <FormError message={errors.vintage?.message} className='mt-1' />
                </div>
                <div className='col-span-1'>
                    <Label htmlFor='volume_ml' className='mb-1'>
                        {hardcodedContent.forms.wineForm.volume_ml.label}
                    </Label>
                    <Input
                        {...register('volume_ml', { valueAsNumber: true })}
                        id='volume_ml'
                        type='number'
                        step={1}
                    />
                    <FormError message={errors.volume_ml?.message} className='mt-1' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <FormError message={error?.message} />
                </div>
                <Button variant='outline' type='submit' loading={isSaving}>
                    {isEditing ? 'Edytuj' : 'Dodaj'}
                </Button>
            </div>
        </form>
    );
}
