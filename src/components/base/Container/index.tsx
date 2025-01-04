import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ContainerProps = {
    type?: "main" | "aside" | "footer"
    children: React.ReactNode
}

export function Container({type = "main", children }: ContainerProps) {

    return (
        <ScrollArea className="bg-blue100 shadow-md">
            <div className={cn(
                "flex flex-col gap-[20px] w-[900px] h-[773px] rounded p-[20px]"
            )}>
                {children}
            </div>
        </ScrollArea>
    );
}