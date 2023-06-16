import { useState } from 'react';

interface Props {
    width: string;
    text: string;
    onClick: () => void;
}
export function Button({ onClick, width, text }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onClick();
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <button
            onClick={handleClick}
            className={`${isClicked ? 'scale-75' : 'scale-100'}
            bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${width}`}
        >
            {text}
        </button>
    );
}
