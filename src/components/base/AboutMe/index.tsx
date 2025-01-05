import { ScrollArea } from "@/components/ui/scroll-area";
import { Semantic } from "../Semantic";
import { Title } from "../Title";
import { Hero } from "./(component)/hero";
import { Repositories } from "./(component)/repositories";
import { Technologies } from "./(component)/skills";
import { Button } from "../Button";
import { Container } from "../Container";

export function AboutMe() {
    return (
        <>
            <Title variant="Sobre mim" />
            <Hero />
            <Title variant="Repositório" />
            <Repositories />
            <Title variant="Tecnologias e Conhecimentos" />
            <Technologies />
            <Button />
        </>
    );
}