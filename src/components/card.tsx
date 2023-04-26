interface Props {
    children?: React.ReactNode;
    className: string;
}

export function Card({ children, className }: Props) {
    return (
        <div className={`${className} p-4  rounded-lg bg-backgroundDark`}>
            {children}
        </div>
    );
}
