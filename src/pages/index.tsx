import { type GetServerSideProps } from 'next';

export default function Home() {
    return <main className='min-h-screen bg-background'></main>;
}

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            data: '',
        },
    };
};
