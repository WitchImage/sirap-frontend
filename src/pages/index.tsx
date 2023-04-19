// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

import { Checkbox } from '@/components';
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
                    label='Custom ✅'
                    checked={checked}
                    onChange={handleCheckboxChange}
                    value='20'
                />
            </div>
        </main>
    );
}
