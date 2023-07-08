type InputType =
    | 'email'
    | 'password'
    | 'number'
    | 'text'
    | 'date'
    | 'radio'
    | 'checkbox'
    | 'file';

interface Props {
    name: string;
    id?: string;
    label: string;
    placeholder: string;
    value: string;
    required?: boolean;
    type?: InputType;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({
    name,
    id,
    label,
    placeholder,
    value,
    required,
    type = 'text',
    onChange,
    onBlur,
}: Props) {
    return (
        <div className='w-full'>
            <label
                htmlFor={id}
                className='block mb-2 text-sm font-medium text-white'
            >
                {label}
            </label>
            <input
                name={name}
                type={type}
                id={id ?? name}
                className='bg-background
                    border border-transparent
                    text-white text-sm 
                    rounded-lg
                    block w-full p-3
                    focus:border focus:border-blue-700 focus:outline-none 
                    focus:ring-blue-700
                '
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
}
