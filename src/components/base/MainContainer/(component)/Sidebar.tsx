import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Navigation } from "../../Navigation";
import { MadeBy } from "./MadeBy";
import { cn } from "@/lib/utils";

type SidebarProps = {
    handleSideShow: () => void;
    show: string
}

export function Sidebar({ handleSideShow, show }: SidebarProps) {
    return (
        <div className={cn(
            "xl:absolute fixed xl:top-0 top-10 bottom-0 right-0 xl:rounded-l-lg bg-blue900 duration-500 p-4 text-blue100 z-20",
            show === "hidden" ? "sm:left-1/2 left-[100px]" : "left-full"
        )}>
            <div className={cn(
                "flex flex-col gap-3 h-full",
                show === "hidden" ? "flex animate-slide-left" : "hidden"
            )}>
                <div className="flex gap-3">
                    <span><Image className="rounded-full" src="/repositories/Guilherme.webp" width={35} height={35} alt="profile picture" /></span>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xs text-blue100">Front-end Developer</h1>
                        <p className="text-xs text-blue100p80">@Guilherme Oliveira</p>
                    </div>
                </div>
                <Separator />
                <Navigation type="skill" />
                <Separator />
                <Navigation type="social" />
                <MadeBy />
            </div>
        </div>
    );
}