import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    block?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
export function Button({ onClick, block, children, disabled }: Props) {
    return (
        <button
            onClick={onClick}
            className={`
                bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-[0.2s] active:scale-[0.95]
                ${block ? 'block' : 'w-fit'}
            `}
        >
            {children}
        </button>
    );
}
