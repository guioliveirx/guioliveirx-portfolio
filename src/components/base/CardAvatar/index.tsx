import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Card() {
    return (
        <div className="flex justify-center items-center mb-[20px] mt-[20px]">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}