'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { AddressBook, Briefcase, Code, House, List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./(component)/Sidebar";

type ContainerProps = {
    type?: "main" | "aside" | "footer"
    children: React.ReactNode
}

export function Container({ type = "main", children }: ContainerProps) {
    const [show, setShow] = useState("show");

    function handleSideShow() {
        show === "hidden" ? setShow("show") : setShow("hidden")
    }

    return (
        <ScrollArea className="bg-blue100 shadow-md xl:rounded">
            <div className="relative flex flex-col gap-[30px] xl:max-w-[900px] md:w-[calc(100dvw-70px)] xl:h-[773px] md:h-dvh h-[calc(100dvh-50px)] md:p-[20px] p-[10px] animate-slide-left">
                <span onClick={handleSideShow} className="absolute md:top-5 top-3 right-5 bg-blue900 rounded p-1 cursor-pointer">
                    <List size={30} color="#f5efef" weight="light" />
                </span>
                <Sidebar handleSideShow={handleSideShow} show={show}/>
                {children}
            </div>
        </ScrollArea>
    );
}