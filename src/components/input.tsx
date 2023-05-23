interface Props {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

export function Input({
    id,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
}: Props) {
    return (
        <div>
            <label
                htmlFor={id}
                className='block mb-2 text-sm font-medium text-white'
            >
                {label}
            </label>
            <input
                type='email'
                id={id}
                className='bg-background
                border 
                text-white text-sm 
                rounded-lg
                block w-full p-3
                focus:border focus:border-blue-700 focus:outline-none 
                focus:ring-blue-700
                '
                value={value}
                placeholder={placeholder}
                required
            />
        </div>
    );
}
