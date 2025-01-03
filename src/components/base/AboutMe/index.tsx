import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { ListContacts } from "../ListContacts";
import { MainSkills } from "../MainSkills";
import { SeparatorMain } from "../SeparatorMain";

export function AboutMe() {
    return (
        <div className="flex flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px] text-blue100">
            <Card />
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
            <p className="text-xs">Contatos</p>
            <ListContacts/>
            <SeparatorMain/>
            <p className="text-xs">Principais tecnologias</p>
            <MainSkills/>
        </div>
    );
}