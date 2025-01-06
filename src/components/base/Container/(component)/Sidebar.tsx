import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Navigation } from "../../Navigation";
import { MadeBy } from "./MadeBy";
import { cn } from "@/lib/utils";
import { X } from "@phosphor-icons/react/dist/ssr";

type SidebarProps = {
    handleSideShow: () => void;
    show: string
}

export function Sidebar({ handleSideShow, show }: SidebarProps) {
    return (
        <div className={
            cn("fixed xl:absolute top-0 bottom-0 right-0 rounded-lg flex flex-col bg-blue900 duration-500 p-5 text-blue100 gap-2 z-20",
                show === "hidden" ? "md:left-1/2 left-16 " : "left-[calc(110%)]")}>
            <span onClick={handleSideShow} className={cn("absolute right-7 top-7 hover:bg-blue100p20 duration-500 rounded cursor-pointer", show === "side-hidden" ? "hidden" : "block")}>
                <X size={30} color="#fafafa" weight="light" />
            </span>
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
    );
}