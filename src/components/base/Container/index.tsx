import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ContainerProps = {
    type?: "main" | "aside" | "footer"
    children: React.ReactNode
}

export function Container({type = "main", children }: ContainerProps) {

    return (
        <ScrollArea className="bg-blue100 shadow-md">
            <div className="flex flex-col gap-[20px] xl:max-w-[900px] w-screen xl:h-[773px] h-[calc(100dvh-70px)] rounded p-[20px]">
                {children}
            </div>
        </ScrollArea>
    );
}