type Props = {
    title: string
    name: string
}

export function LeftCardTitle ({title , name } : Props) {
    return (
        <div className="bg-blue500 text-blue100 p-[15px] rounded">
            <p className="font-bold mb-[5px]">{title}</p>
            <p className="font-light text-xs">{name}</p>
        </div>
    );
}