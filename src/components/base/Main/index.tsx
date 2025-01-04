import { Semantic } from "../Semantic";
import { Title } from "../Title";

export function Main() {
    return (
        <Semantic type="section">
            <div className="flex gap-[20px] bg-blue100 w-[900px] h-[773px] shadow-md rounded p-[20px]">
                <Title variant="Sobre mim" />
            </div>
        </Semantic>
    );
}