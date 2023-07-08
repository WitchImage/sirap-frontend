import { Button, Card, Input } from '@/components';
import Link from 'next/link';

export default function Login() {
    return (
        <main className='h-screen bg-background'>
            <section className='h-full md:flex md:items-center'>
                <Card className='px-10 py-4 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[30%] rounded-none md:rounded-md mx-auto'>
                    <h2 className='mb-4 self-start'>Bienvenido de vuelta!</h2>
                    <Input
                        name='email'
                        label='Email'
                        placeholder='Ingresa tu email'
                        value={''}
                        onChange={() => {}}
                    />
                    <Input
                        name='password'
                        label='Contraseña'
                        placeholder='Ingresa tu contraseña'
                        value={''}
                        onChange={() => {}}
                    />
                    <Link
                        className='text-sm self-end'
                        href='password-recovery'
                    >
                        Olvidé mi contraseña
                    </Link>
                    <Button
                        className='mt-3'
                        onClick={() => {}}
                    >
                        Iniciar sesión
                    </Button>
                    <span className='text-sm'>
                        ¿No tienes cuenta?{' '}
                        <Link href='/register'>Crea una acá</Link>
                    </span>
                </Card>
            </section>
        </main>
    );
}
