'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AddressBook, Briefcase, Code, House, List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "../Navigation";

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
                <div className={cn("rounded-lg flex flex-col side bg-blue900 duration-500 p-5 text-blue100 gap-5", show)}>
                    <span onClick={handleSideShow} className={cn("absolute right-7 top-7 hover:bg-blue100p20 duration-500 rounded cursor-pointer", show === "side-hidden" ? "hidden" : "block")}>
                        <X size={30} color="#fafafa" weight="light" />
                    </span>
                    <div className="flex gap-3">
                        <span><Image className="rounded-full" src="/repositories/Guilherme.webp" width={50} height={50} alt="profile picture" /></span>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-sm text-blue100">Front-end Developer</h1>
                            <p className="text-xs text-blue100p80">@Guilherme Oliveira</p>
                        </div>
                    </div>
                    <Separator />
                    <Navigation type="skill"/>
                    <Separator />
                    <Navigation type="social"/>
                </div>
                {children}
            </div>
        </ScrollArea>
    );
}