interface Props {
    children?: React.ReactNode;
    className: string;
}

export function Card({ children, className }: Props) {
    return (
        <div
            className={`${className} flex flex-col gap-6 items-center justify-start`}
        >
            {children}
        </div>
    );
}
