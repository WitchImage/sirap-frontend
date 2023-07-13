import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function Loader() {
    return (
        <div className='bg-background h-screen flex flex-col items-center justify-center gap-3'>
            <AiOutlineLoading3Quarters
                className='animate-spin'
                size={30}
            />
            <span className='mx-auto text-2xl'>Cargando...</span>
        </div>
    );
}
