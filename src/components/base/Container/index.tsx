import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ContainerProps = {
    type?: "main" | "aside" | "footer"
    children: React.ReactNode
}

export function Container({type = "main", children }: ContainerProps) {

    return (
        <ScrollArea className="bg-blue100 shadow-md xl:rounded">
            <div className="relative flex flex-col gap-[30px] xl:max-w-[900px] md:w-[calc(100dvw-70px)] xl:h-[773px] md:h-dvh h-[calc(100dvh-50px)] md:p-[20px] p-[10px] animate-slide-left">
                {children}
            </div>
        </ScrollArea>
    );
}