import { Button, Card, Input } from '@/components';

export default function register() {
    return (
        <div className='py-2 bg-background md:flex md:items-center sm:max-h-fit md:max-h-fit lg:max-h-fit xl:max-h-fit 2xl:max-h-fit'>
            <Card className='px-10 py-4 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[40%] rounded-none md:rounded-md mx-auto'>
                <h3 className='mb-4 self-start'>Registro Compañia</h3>
                <Input
                    name='name'
                    label='Nombre Compañia'
                    placeholder='Ingresa el nombre de la compañia '
                    value={''}
                    onChange={() => {}}
                />
                <Input
                    name='email'
                    label='Email Compañia'
                    placeholder='Ingresa el  email de la compañia'
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
                <Input
                    name='address'
                    label='Dirección'
                    placeholder='Ingresa la dirección de la compañia'
                    value={''}
                    onChange={() => {}}
                />
                <Input
                    name='NIT'
                    label='NIT'
                    placeholder='Ingresa el NIT de la compañia'
                    value={''}
                    onChange={() => {}}
                />
                {/* <span className='text-sm'>
                    <div className='grid grid-cols-2'>
                        <Link href='/terms'>TyC</Link>
                        <Checkbox
                            label='Terminos'
                            name='Términos y condiciones'
                            checked={false}
                            onChange={() => {}}
                            value={''}
                        />
                    </div>
                </span> */}
                <Button
                    className='mt-3'
                    onClick={() => {}}
                >
                    Crear cuenta
                </Button>
            </Card>
        </div>
    );
}
