import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { Contacts } from "../Contacts";
import { Skills } from "../Skills";
import { SeparatorMain } from "../SeparatorMain";

export function Header() {
    return (
        <header className="xl:flex hidden flex-col bg-blue900 w-[400px] max-h-[773px] h-full rounded p-[20px] gap-[10px] text-blue100 shadow overflow-auto custom-scroll">
            <Card />
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
            <p className="text-xs text-blue100p80">Contatos</p>
            <Contacts/>
            <SeparatorMain/>
            <p className="text-xs text-blue100p80">Principais tecnologias</p>
            <Skills variant="main"/>
        </header>
    );
}