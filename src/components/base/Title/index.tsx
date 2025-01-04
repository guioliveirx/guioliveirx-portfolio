type TitleProps = {
    variant : string
}

export function Title ({variant} : TitleProps) {
    return (
           <span className="text-blue900 font-semibold text-sm">{variant}</span> 
    );
}