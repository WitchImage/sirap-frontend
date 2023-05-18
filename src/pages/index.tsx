// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

import { Avatar, Card, Checkbox, Select } from '@/components';
import { type GetServerSideProps } from 'next';
import { useState } from 'react';

export default function Home() {
    /*
        Se estan probando los componentes para visualizar
        Si estan funcionando y como se ve su aspecto visual
    */
    const [checked, setChecked] = useState(false);
    const [valueSelect, setValueSelect] = useState('');

    const handleCheckboxChange = (checked: boolean) => {
        setChecked(checked);
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setValueSelect(event.target.value);
    };

    const handleSelectBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
        console.log('El usuario a perdido el foco del elemento ', valueSelect);
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
                    onBlur={handleSelectBlur}
                    onChange={handleSelectChange}
                    name='select'
                    id='paises'
                    label='Seleccione un pais'
                    width='w-80'
                    options={[
                        {
                            key: '1',
                            value: 'Colombia',
                            valueToShow: 'Colombia',
                        },
                        { key: '2', value: 'Canada', valueToShow: 'Canada' },
                        {
                            key: '3',
                            value: 'Argentina',
                            valueToShow: 'Argentina',
                        },
                    ]}
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
            <div className='flex flex-row'>
                <Avatar
                    name='Juan'
                    size='sm'
                />
                <Avatar
                    name='Juan'
                    size='md'
                />
                <Avatar
                    name='Juan'
                    size='lg'
                />
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
