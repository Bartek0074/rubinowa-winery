import NextLink from 'next/link';

import clsx from 'clsx';
import type { ComponentProps, CSSProperties, ReactNode } from 'react';

import { hardcodedContent } from '@/src/libs/global-content';

export type ListColumn<T> = {
	key: string;
	header?: ReactNode;
	render: (row: T) => ReactNode;
	className?: string;
};

export type ListProps<T> = {
	columns: ListColumn<T>[];
	data: T[];
	getRowKey: (row: T) => string | number;
	getRowHref: (row: T) => ComponentProps<typeof NextLink>['href'];
	emptyMessage?: string;
	isError?: boolean;
	errorMessage?: string;
};

const List = <T,>({
	columns,
	data,
	getRowKey,
	getRowHref,
	emptyMessage = hardcodedContent.organisms.list.emptyMessage,
	isError = false,
	errorMessage = hardcodedContent.organisms.list.errorMessage,
}: ListProps<T>) => {
	if (isError) {
		return (
			<div
				role='alert'
				className='w-full border-y border-black-muted/30 px-4 py-12 text-center font-sans text-body text-error'
			>
				{errorMessage}
			</div>
		);
	}

	if (data.length === 0) {
		return (
			<div className='w-full border-y border-black-muted/30 px-4 py-12 text-center font-sans text-body text-black/75'>
				{emptyMessage}
			</div>
		);
	}

	// First column (record name) is wider; the same template drives header and rows.
	const gridStyle = {
		'--list-columns': columns
			.map((_, index) => (index === 0 ? 'minmax(0,2fr)' : 'minmax(0,1fr)'))
			.join(' '),
	} as CSSProperties;

	return (
		<div className='w-full' style={gridStyle}>
			<div
				aria-hidden='true'
				className='hidden gap-x-6 border border-black-muted/30 bg-beige/35 px-4 py-4 font-sans text-caption font-semibold uppercase tracking-wider text-black md:grid md:grid-cols-(--list-columns)'
			>
				{columns.map((column) => (
					<div key={column.key} className={clsx('min-w-0', column.className)}>
						{column.header}
					</div>
				))}
			</div>
			<ul className='divide-y divide-black-muted/20 border border-t-0 border-black-muted/30 bg-off-white/50 max-md:border-t'>
				{data.map((row) => (
					<li key={getRowKey(row)}>
						<NextLink
							href={getRowHref(row)}
							className={clsx(
								'cursor-pointer flex flex-wrap items-baseline gap-x-6 gap-y-1 px-4 py-5',
								'md:grid md:items-center md:grid-cols-(--list-columns)',
								'font-sans text-body text-black/75',
								'transition-colors ease-editorial',
								'hover:bg-beige/50',
								'focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-black',
							)}
						>
							{columns.map((column, index) => (
								<div
									key={column.key}
									className={clsx(
										'min-w-0',
										index === 0 &&
											'w-full font-medium text-black md:w-auto',
										column.className,
									)}
								>
									{column.render(row)}
								</div>
							))}
						</NextLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
