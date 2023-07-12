import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Loader } from '@/components';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () => setLoading(false));
        Router.events.on('routeChangeError', () => setLoading(false));
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true));
            Router.events.off('routeChangeComplete', () => setLoading(false));
            Router.events.off('routeChangeError', () => setLoading(false));
        };
    }, [Router.events]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
