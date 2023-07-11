interface Props {
    label: string;
    name: string;
    id?: string;
    placeholder?: string;
    options: Options[];
    width: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    value?: string;
}

interface Options {
    key: string;
    value: string;
    valueToShow: string;
}

export function Select({
    label,
    id,
    name,
    placeholder,
    options,
    width,
    onChange,
}: Props) {
    const showOptions = () => {
        return options.map(option => {
            return (
                <option
                    key={option.key}
                    value={option.value}
                >
                    {option.valueToShow}
                </option>
            );
        });
    };

    return (
        <div className={`${width} m-3`}>
            <label
                className='block mb-2 text-sm font-medium text-white'
                htmlFor={id ?? name}
            >
                {label}
            </label>
            <select
                className='bg-backgroundDark border border-backgroundDark text-white text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5'
                name={name}
                id={id ?? name}
                onChange={onChange}
            >
                {placeholder && (
                    <option
                        disabled
                        selected
                    >
                        {placeholder}
                    </option>
                )}
                {showOptions()}
            </select>
        </div>
    );
}
