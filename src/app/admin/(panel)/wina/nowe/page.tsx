import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nowe wino | Panel Admina',
    robots: {
        index: false,
        follow: false,
        noarchive: true,
    }
};

export default function AdminWineNew() {
    return (
        <p>Nowe wino</p>
    );
}
