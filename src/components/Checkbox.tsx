import { FaCheck } from 'react-icons/fa';

interface Props {
    label: string;
    value: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange, value }: Props) {
    return (
        <label
            htmlFor='my-checkbox'
            className='flex items-center space-x-2 p-5'
        >
            <div
                className={`flex items-center justify-center h-6 w-6 rounded border-2  transition duration-300 ease-in-out ${
                    checked
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-transparent border-blue-700'
                }`}
            >
                <input
                    id='my-checkbox'
                    type='checkbox'
                    checked={checked}
                    onChange={e => onChange(e.target.checked)}
                    className='opacity-0 absolute'
                />
                {checked && <FaCheck />}
            </div>
            <span className='ml-2 font-medium text-white'>{label}</span>
        </label>
    );
}
