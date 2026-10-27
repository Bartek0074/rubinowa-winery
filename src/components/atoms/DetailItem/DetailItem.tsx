import type { ReactNode } from 'react';

type DetailItemProps = {
    label: string;
    children: ReactNode;
};

const DetailItem = ({ label, children }: DetailItemProps) => (
    <div className='flex min-w-0 flex-col gap-1'>
        <span className='text-caption text-black/60'>{label}</span>
        <div className='wrap-break-word text-body'>{children}</div>
    </div>
);

export default DetailItem;