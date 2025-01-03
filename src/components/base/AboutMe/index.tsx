import { Card } from "../Card";
import { SeparatorMain } from "../SeparatorMain";

export function AboutMe() {
    return (
        <div className="flex flex-col bg-blue900 w-[400px] rounded p-[20px] gap-[10px]">
            <Card />
            <SeparatorMain/>

        </div>
    );
}