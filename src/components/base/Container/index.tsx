'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

type ContainerProps = {
    type?: "main" | "aside" | "footer"
    children: React.ReactNode
}

export function Container({ type = "main", children }: ContainerProps) {
    const [show, setShow] = useState("side-hidden");

    function handleSideShow() {
        show === "side-hidden" ? setShow("side-show") : setShow("side-hidden")
    }

    return (
        <ScrollArea className="bg-blue100 shadow-md xl:rounded">
            <div className="relative flex flex-col gap-[30px] xl:max-w-[900px] md:w-[calc(100dvw-70px)] xl:h-[773px] md:h-dvh h-[calc(100dvh-50px)] md:p-[20px] p-[10px] animate-slide-left">
                <span onClick={handleSideShow} className="absolute md:top-5 top-3 right-5 bg-blue900 rounded p-1 cursor-pointer">
                    <List size={30} color="#f5efef" weight="light" />
                </span>
                <div className={cn("flex flex-col side bg-blue900 duration-500 p-5 text-blue100", show)}>
                    <span onClick={handleSideShow} className={cn("absolute right-10 top-5 hover:bg-blue100p20 duration-500 rounded cursor-pointer", show === "side-hidden" ? "hidden" : "block")}>
                        <X size={32} color="#fafafa" weight="light" />
                    </span>
                    <div className="flex gap-3">
                        <span><Image className="rounded-full" src="/repositories/Guilherme.webp" width={50} height={50} alt="profile picture"/> </span>
                        <div>
                            <h1>Front-end Developer</h1>
                            <p>@Guilherme Oliveira</p>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </ScrollArea>
    );
}