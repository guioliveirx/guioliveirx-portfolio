import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { Contacts } from "../Contacts";
import { Skills } from "../Skills";
import { SeparatorMain } from "../SeparatorMain";

export function SideBar() {
    return (
        <div className="xl:flex hidden flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px] text-blue100 shadow">
            <Card />
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
            <p className="text-xs text-blue100p80">Contatos</p>
            <Contacts/>
            <SeparatorMain/>
            <p className="text-xs text-blue100p80">Principais tecnologias</p>
            <Skills variant="main"/>
        </div>
    );
}