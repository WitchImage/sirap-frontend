interface Props {
    children?: React.ReactNode;
    width: string;
}

export function Card({ children, width }: Props) {
    console.log(width);

    return (
        <div className={`m-2 h-50 ${width} p-4  rounded-lg bg-backgroundDark`}>
            {children}
        </div>
    );
}
