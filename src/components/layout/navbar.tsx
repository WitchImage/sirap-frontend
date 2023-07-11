import Link from 'next/link';

export function Navbar() {
    return (
        <nav className='h-[4rem] flex flex-row items-center justify-between p-4 bg-backgroundDark shadow-sm shadow-gray'>
            <Link href='/'>Inicio</Link>
            <Link href='/login'>Iniciar sesión</Link>
        </nav>
    );
}
