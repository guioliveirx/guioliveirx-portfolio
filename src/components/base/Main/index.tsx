import { Semantic } from "../Semantic";
import { Title } from "../Title";
import { Hero } from "./(component)/hero";

export function Main() {
    return (
        <Semantic type="section">
            <div className="flex flex-col gap-[20px] bg-blue100 w-[900px] h-[773px] shadow-md rounded p-[20px]">
                <Title variant="Sobre mim" />
                <Hero/>
            </div>
        </Semantic>
    );
}