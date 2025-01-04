import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { ListContacts } from "../ListContacts";
import { Skills } from "../Skills";
import { SeparatorMain } from "../SeparatorMain";

export function SideBar() {
    return (
        <div className="xl:flex hidden flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px] text-blue100 shadow">
            <Card />
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
            <p className="text-xs">Contatos</p>
            <ListContacts/>
            <SeparatorMain/>
            <p className="text-xs">Principais tecnologias</p>
            <Skills variant="main"/>
        </div>
    );
}