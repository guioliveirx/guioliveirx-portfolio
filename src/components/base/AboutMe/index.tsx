import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { ListContacts } from "../ListContacts";
import { SeparatorMain } from "../SeparatorMain";

export function AboutMe() {
    return (
        <div className="flex flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px] text-blue100">
            <Card />
            <SeparatorMain/>
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
            <p className="text-xs">Contatos</p>
            <ListContacts/>

        </div>
    );
}