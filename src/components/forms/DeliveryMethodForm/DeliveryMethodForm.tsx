'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { z } from 'zod';

import { Label, Input, Button, FormError } from '@/src/components/atoms';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { deliveryMethodSchema } from '@/src/libs/validation/deliveryMethod';

import type { SupabaseDeliveryMethod } from '@/src/libs/types';

import { ROUTES } from '@/src/libs/routes';

import { hardcodedContent } from '@/src/libs/global-content';

import { createDeliveryMethod } from '@/src/actions/deliveryMethods/createDeliveryMethod';
import { updateDeliveryMethod } from '@/src/actions/deliveryMethods/updateDeliveryMethod';

type DeliveryMethodFormType = {
	initialData?: SupabaseDeliveryMethod;
};

export default function DeliveryMethodForm({ initialData }: DeliveryMethodFormType) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof deliveryMethodSchema>>({
		mode: 'onTouched',
		resolver: zodResolver(deliveryMethodSchema),
		defaultValues: {
			name: initialData?.name ?? '',
			price: initialData?.price ?? 0,
		},
	});

	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const isEditing = Boolean(initialData?.id);

	const onSubmit = async (data: z.infer<typeof deliveryMethodSchema>) => {
		setIsSaving(true);
		setError(null);

		try {
			if (isEditing) {
				const id = initialData?.id;

				if (id) {
					await updateDeliveryMethod(String(id), {
						name: data.name,
						price: data.price,
					});
				} else {
					throw new Error('Brak ID metody dostawy do aktualizacji');
				}
			} else {
				await createDeliveryMethod({
					name: data.name,
					price: data.price,
				});
			}

			router.push(ROUTES.ADMIN_DELIVERY_METHODS);
		} catch (error) {
			setError(
				error instanceof Error
					? error
					: new Error('Wystąpił nieoczekiwany błąd.'),
			);
		} finally {
			setIsSaving(false);
		}
	};

	return (
		<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8'>
				<div className='col-span-1'>
					<Label htmlFor='name' className='mb-1'>
						{hardcodedContent.forms.deliveryMethodForm.name.label}
					</Label>
					<Input {...register('name')} id='name' type='text' />
					<FormError message={errors.name?.message} className='mt-1' />
				</div>
				<div className='col-span-1'>
					<Label htmlFor='price' className='mb-1'>
						{hardcodedContent.forms.deliveryMethodForm.price.label}
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
			</div>
			<div className='flex justify-between items-center'>
				<div>
					<FormError message={error?.message} />
				</div>
				<Button variant='outline' type='submit' loading={isSaving}>
					{isEditing
						? hardcodedContent.forms.deliveryMethodForm.editButton
						: hardcodedContent.forms.deliveryMethodForm.addButton}
				</Button>
			</div>
		</form>
	);
}
