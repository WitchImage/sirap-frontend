import { type ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
    block?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
export function Button({
    className = '',
    block,
    children,
    disabled,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className={`
                ${className}
                bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                transition-all duration-[0.2s] active:scale-[0.95] w-full
            `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
