import { Button, Card, Input } from '@/components';
import { useToast } from '@/hooks';

const { addToast } = useToast();

export default function register() {
    return (
        <div className='py-2 h-full bg-background md:flex md:items-center'>
            <Card className='px-10 py-4 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[40%] rounded-none md:rounded-md mx-auto'>
                <h3 className='mb-4 self-start'>Registro Operador</h3>
                <Input
                    name='name'
                    label='Nombre Operador'
                    placeholder='Ingresa el nombre del operador '
                    value={''}
                    onChange={() => {}}
                />
                <Input
                    name='email'
                    label='Email Operador'
                    placeholder='Ingresa el  email del operador'
                    value={''}
                    onChange={() => {}}
                />
                <Input
                    name='password'
                    label='Contraseña'
                    placeholder='Ingresa la contraseña'
                    value={''}
                    onChange={() => {}}
                />
                <Button
                    className='mt-3'
                    onClick={() => {
                        addToast('¡Notificación de éxito!', 'success');
                    }}
                >
                    Crear cuenta de operador
                </Button>
            </Card>
        </div>
    );
}
