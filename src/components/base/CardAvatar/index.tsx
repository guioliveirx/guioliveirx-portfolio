import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Card() {
    return (
        <div className="flex justify-center items-center mb-[20px] mt-[20px] animate-slide-left">
            <Avatar>
                <AvatarImage src="/repositories/Guilherme.webp" />
                <AvatarFallback></AvatarFallback>
            </Avatar>
        </div>
    );
}