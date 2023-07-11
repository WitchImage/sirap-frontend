import { type GetServerSideProps } from 'next';

export default function Home() {
    return <main className='h-full bg-background'></main>;
}

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            data: '',
        },
    };
};
