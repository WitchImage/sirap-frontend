import PhoneInput from 'react-phone-number-input';
import type { E164Number, NumberType } from 'libphonenumber-js/types';
interface Props {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string | NumberType | E164Number) => void;
    // onChange: (value: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

export function Phone({
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

            <PhoneInput
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='bg-background
                border 
                text-white text-sm 
                rounded-lg
                block w-full p-3
                focus:border focus:border-blue-700 focus:outline-none 
                focus:ring-blue-700
                phone-input'
            />
        </div>
    );
}
