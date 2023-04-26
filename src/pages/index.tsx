// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

import { Card, Checkbox, Select } from '@/components';
import { type GetServerSideProps } from 'next';
import { useState } from 'react';

export default function Home() {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setChecked(checked);
    };
    return (
        <main className='min-h-screen bg-background'>
            <div>
                <Checkbox
                    name='custom'
                    id='custom'
                    label='Custom ✅'
                    checked={checked}
                    onChange={handleCheckboxChange}
                    value='20'
                />
            </div>
            <div>
                <Select
                    name='select'
                    id='paises'
                    label='Seleccione un pais'
                    width='w-80'
                    options={['Colombia', 'Canada', 'Paris', 'Argentina']}
                />
            </div>
            <div className='flex flex-row'>
                <Card className='m-4 w-1/4 p-4'>
                    <h2 className='text-white font-medium'>Prueba para card</h2>
                    <p className='text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam consectetur dolorem odio ipsum esse,
                        explicabo eius ex illum, dolore cumque, iusto illo
                        corrupti provident! Qui fugit nobis quae laborum ipsum.
                    </p>
                </Card>
                <Card className='m-4 w-1/2 p-4'>
                    <h2 className='text-white font-medium'>Prueba para card</h2>
                    <p className='text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam consectetur dolorem odio ipsum esse,
                        explicabo eius ex illum, dolore cumque, iusto illo
                        corrupti provident! Qui fugit nobis quae laborum ipsum.
                    </p>
                </Card>
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            data: '',
        },
    };
};
