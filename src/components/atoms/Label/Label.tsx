import clsx from 'clsx';

import { LabelHTMLAttributes } from 'react';

type LabelProps = {
	required?: boolean;
	className?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ ...props }: LabelProps) {
	return (
		<label
			{...props}
			className={clsx(
				'block text-small text-black font-medium cursor-pointer w-fit',
				props.className,
			)}
		>
			{props.children}
			{props.required && <span className="text-error"> *</span>}
		</label>
	);
}
