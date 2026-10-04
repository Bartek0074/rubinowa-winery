import NavigationAdminAuth from '@/src/components/layout/NavigationAdminAuth';

export default function AdminAuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-col'>
            <NavigationAdminAuth />
            <main className='flex-1'>{children}</main>
        </div>
    );
}
