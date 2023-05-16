interface Props {
    columnNames: string[];
    data: Record<string, any>;
}

/*
    Componente para visualizar una tabla con una lista de datos.
    Se especifica el nombre de las columnas y se pasa una lista 
    de objetos para visualizar los datos correspondientes
*/
export function Table({ columnNames, data }: Props) {
    const dataArray = Object.values(data);
    return (
        <div className='relative overflow-x-auto rounded-lg'>
            <table className='table-fixed w-full divide-white text-white rounded-lg'>
                <thead className='text-left bg-backgroundDark pt-5'>
                    <tr>
                        {columnNames.map(name => (
                            // eslint-disable-next-line react/jsx-key
                            <th className='px-6 py-3'>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-transparent divide-y divide-white'>
                    {dataArray.map((item: any, index: any) => {
                        return (
                            <tr key={index}>
                                {Object.values(item).map(
                                    (value: any, index: number) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <td className='px-6 py-2'>
                                            {typeof value !== 'undefined'
                                                ? value
                                                : ''}
                                        </td>
                                    )
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
