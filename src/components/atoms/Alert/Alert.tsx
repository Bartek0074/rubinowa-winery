import {
    IconAlertCircle,
    IconAlertTriangle,
    IconCircleCheck,
    IconInfoCircle,
} from '@tabler/icons-react';
import clsx from 'clsx';

import type { ReactNode } from 'react';

const statuses = {
    error: {
        icon: IconAlertCircle,
        className: 'border-error/30 bg-error/5 text-error',
        role: 'alert',
    },
    info: {
        icon: IconInfoCircle,
        className: 'border-info/30 bg-info/5 text-info',
        role: 'status',
    },
    success: {
        icon: IconCircleCheck,
        className: 'border-success/30 bg-success/5 text-success',
        role: 'status',
    },
    warning: {
        icon: IconAlertTriangle,
        className: 'border-warning/30 bg-warning/5 text-warning',
        role: 'alert',
    },
} as const;

export type AlertStatus = keyof typeof statuses;

export type AlertProps = {
    status: AlertStatus;
    message: ReactNode;
    description?: ReactNode;
    className?: string;
};

const Alert = ({ status, message, description, className }: AlertProps) => {
    const { icon: Icon, className: statusClassName, role } = statuses[status];

    return (
        <div
            role={role}
            className={clsx(
                'flex items-start gap-3 border px-4 py-3',
                'font-sans text-body',
                statusClassName,
                className,
            )}
        >
            <Icon aria-hidden='true' className='mt-0.75 size-5 shrink-0' stroke={1.5} />
            <div className='min-w-0'>
                <div className='font-semibold'>{message}</div>
                {description && (
                    <div className='mt-1 text-black-muted'>{description}</div>
                )}
            </div>
        </div>
    );
};

export default Alert;