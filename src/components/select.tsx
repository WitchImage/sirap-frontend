interface Props {
    label: string;
    name: string;
    id?: string;
    options: string[];
    width: string;
}
export function Select({ label, id = '', name, options, width }: Props) {
    const existId = () => {
        return id !== '' ? id : name;
    };

    const showOptions = () => {
        return options.map(option => {
            return (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            );
        });
    };

    return (
        <div className={`${width} m-3`}>
            <label
                className='block mb-2 text-sm font-medium text-white'
                htmlFor={existId()}
            >
                {label}
            </label>
            <select
                className='bg-backgroundDark border border-backgroundDark text-white text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5'
                name={name}
                id={existId()}
            >
                <option selected>Chose option</option>
                {showOptions()}
            </select>
        </div>
    );
}
