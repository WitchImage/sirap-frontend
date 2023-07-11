import { type PropsWithChildren } from 'react';
import { Navbar } from './navbar';

export function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className='h-container'>{children}</div>
        </>
    );
}
