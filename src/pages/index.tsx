// import { Inter } from 'next/font/google';

import type { GetServerSideProps } from 'next/types';

// const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }: any) {
    return <main className='min-h-screen bg-background'></main>;
}

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            data: '',
        },
    };
};
