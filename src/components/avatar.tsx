/* eslint-disable indent */
interface Props {
    size: string;
    name: string;
    imgPath?: string;
}
export function Avatar({ size, name, imgPath }: Props) {
    const convertSize = () => {
        switch (size) {
            case 'sm':
                return 'w-10 h-10';
            case 'md':
                return 'w-20 h-20';
            case 'lg':
                return 'w-40 h-40';
            default:
                return 'w-20 h-20';
        }
    };
    return (
        <div
            className={`relative ${convertSize()} overflow-hidden bg-blue-700 rounded-full`}
        >
            <div className='text-white text-xl font-bold absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                {imgPath ? (
                    <img
                        className='w-full h-full'
                        alt='perfil'
                        src={imgPath}
                    ></img>
                ) : (
                    name[0]
                )}
            </div>
        </div>
    );
}
