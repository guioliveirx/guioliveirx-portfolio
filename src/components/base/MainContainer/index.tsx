'use client'

import { List, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Sidebar } from "./(component)/Sidebar";

type ContainerProps = {
    children: React.ReactNode
}

export function MainContainer({ children }: ContainerProps) {
    const [show, setShow] = useState("show");

    function handleSideShow() {
        show === "hidden" ? setShow("show") : setShow("hidden")
    }

    let Icon = show === "show" ? List : X;

    return (
        <main className="xl:max-w-[900px] w-full xl:max-h-[773px] md:h-full h-[calc(100%-50px)]">
            <div className="relative rounded bg-blue100 custom-scroll p-3 overflow-x-hidden xl:overflow-y-auto h-full ">
                <span onClick={handleSideShow} className="xl:absolute fixed xl:top-5 top-0 xl:right-5 right-0 z-40 xl:w-auto w-[100%] bg-blue900 xl:rounded xl:p-1 p-2 cursor-pointer">
                    <Icon className="relative justify-self-end xl:mr-0 mr-3" size={30} color="#f5efef" weight="light" />
                </span>
                <div className="xl:mt-3 mt-12 relative flex flex-col gap-[20px] md:h-dvh h-[calc(100dvh-50px)]">
                    {children}
                </div>
                <Sidebar handleSideShow={handleSideShow} show={show} />
            </div>
        </main>
    );
}