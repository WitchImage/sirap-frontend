type TableItem = Record<string, any>;
interface Props<T extends TableItem> {
    columnNames: string[];
    data: T[];
}

/*
    Componente para visualizar una tabla con una lista de datos.
    Se especifica el nombre de las columnas y se pasa una lista 
    de objetos para visualizar los datos correspondientes
*/
export function Table<T extends TableItem>({ columnNames, data }: Props<T>) {
    return (
        <div className='relative overflow-x-auto rounded-lg'>
            <table className='w-full divide-grayLight text-white rounded-lg'>
                <thead className='bg-darkGray pt-5'>
                    <tr>
                        {columnNames.map(name => (
                            <th
                                className='px-6 py-3'
                                key={name}
                            >
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-backgroundDark divide-y divide-grayLight'>
                    {data.map((item: T, index) => {
                        return (
                            <tr key={index}>
                                {Object.values(item).map((value, index) => (
                                    <td
                                        className='p-3'
                                        key={index}
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
