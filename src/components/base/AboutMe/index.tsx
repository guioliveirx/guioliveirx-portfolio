import { Card } from "../CardAvatar";
import { LeftCardTitle } from "../LeftCardTitle";
import { SeparatorMain } from "../SeparatorMain";

export function AboutMe() {
    return (
        <div className="flex flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px]">
            <Card />
            <SeparatorMain/>
            <LeftCardTitle title="FRONT-END DEVELOPER" name="@Guilherme Oliveira"/>
            <SeparatorMain/>
        </div>
    );
}