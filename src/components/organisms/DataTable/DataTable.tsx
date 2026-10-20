import clsx from 'clsx';

import type { ReactNode } from 'react';

export type DataTableColumn<T> = {
	key: string;
	header: ReactNode;
	render: (row: T) => ReactNode;
	className?: string;
};

export type DataTableProps<T> = {
	columns: DataTableColumn<T>[];
	data: T[];
	getRowKey: (row: T) => string | number;
	emptyMessage?: string;
	isError?: boolean;
	errorMessage?: string;
};

const DataTable = <T,>({
	columns,
	data,
	getRowKey,
	emptyMessage = 'Brak danych do wyświetlenia.',
	isError = false,
	errorMessage = 'Nie udało się załadować danych.',
}: DataTableProps<T>) => {
	return (
		<div className='w-full overflow-x-auto border border-black-muted/60 bg-off-white'>
			<table className='w-full border-collapse text-left'>
				<thead>
					<tr className='border-b border-black-muted/60 bg-beige/90'>
						{columns.map((column) => (
							<th
								key={column.key}
								scope='col'
								className={clsx(
									'px-4 py-6',
									'font-sans text-caption font-semibold uppercase tracking-wider text-black',
									column.className,
								)}
							>
								{column.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{isError ? (
						<tr>
							<td
								colSpan={columns.length}
								role='alert'
								className='px-4 py-10 text-center font-sans text-body text-error'
							>
								{errorMessage}
							</td>
						</tr>
					) : data.length === 0 ? (
						<tr>
							<td
								colSpan={columns.length}
								className='px-4 py-10 text-center font-sans text-body text-black-muted'
							>
								{emptyMessage}
							</td>
						</tr>
					) : (
						data.map((row, index) => (
							<tr
								key={getRowKey(row)}
								className='border-b border-black-muted/30 transition-colors ease-editorial last:border-b-0 hover:bg-beige/30'
							>
								{columns.map((column) => (
									<td
										key={column.key}
										className={clsx(
											'px-4 py-6 align-middle',
											'font-sans text-body text-black',
											column.className,
										)}
									>
										{column.render(row)}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
