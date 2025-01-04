import { ScrollArea } from "@/components/ui/scroll-area";
import { Semantic } from "../Semantic";
import { Title } from "../Title";
import { Hero } from "./(component)/hero";
import { Repositories } from "./(component)/repositories";
import { Technologies } from "./(component)/skills";
import { Button } from "../Button";

export function AboutMe() {
    return (
        <Semantic type="section">
            <ScrollArea className="bg-blue100 shadow-md">
                <div className="flex flex-col gap-[20px] w-[900px] h-[773px] rounded p-[20px]">
                    <Title variant="Sobre mim" />
                    <Hero />
                    <Title variant="Repositório" />
                    <Repositories />
                    <Title variant="Tecnologias e Conhecimentos" />
                    <Technologies/>
                    <Button/>
                </div>
            </ScrollArea>
        </Semantic>
    );
}