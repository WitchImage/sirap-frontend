import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children?: React.ReactNode;
    className: string;
    position:
        | 'top-right'
        | 'top-center'
        | 'top-left'
        | 'bottom-right'
        | 'bottom-center'
        | 'bottom-left';
    limit?: number;
}

export function ToastProvider({
    children,
    className,
    position,
    limit = 3,
}: Props) {
    return (
        <>
            <ToastContainer
                position={position || 'top-right'}
                limit={3}
            />
            {children}
        </>
    );
}

export const useToast = () => {
    const addToast = (message: string, type: 'success' | 'error' | 'info') => {
        toast[type](message);
    };

    return { addToast };
};
