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
        <div className="relative rounded bg-blue100 overflow-y-auto overflow-x-hidden xl:max-w-[900px] xl:h-[773px] custom-scroll p-3">
            <span onClick={handleSideShow} className="xl:absolute fixed xl:top-5 top-0 xl:right-5 right-0 z-40 xl:w-auto w-[100%] bg-blue900 xl:rounded xl:p-1 p-2 cursor-pointer">
                <Icon className="relative justify-self-end xl:mr-0 mr-3" size={30} color="#f5efef" weight="light" />
            </span>
            <div className="mt-12 xl:mt-3 relative flex flex-col gap-[20px] xl:w-[calc(100dvh-70px)] md:h-dvh h-[calc(100dvh-50px)] ">
                {children}
            </div>
            <Sidebar handleSideShow={handleSideShow} show={show}/>
        </div>
    );
}