import '@/styles/globals.css';
import '@/styles/phoneInput.css';
import 'react-phone-number-input/style.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components';
import { ToastProvider } from '@/hooks';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ToastProvider
            className={''}
            position={'top-right'}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ToastProvider>
    );
}
