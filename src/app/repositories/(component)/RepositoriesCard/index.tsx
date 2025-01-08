'use client'

import { RepositoriesList } from "@/config/RepositoriesList.config";
import { cn } from "@/lib/utils";
import { IconWeight } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useMemo } from "react";

export function RepositoriesCard() {
    const [hearth, setHearth] = useState("unpressed");

    const handleHearthClick = useCallback(() => {
        setHearth(prevHearth => prevHearth === "unpressed" ? "pressed" : "unpressed");
    }, []);

    const repositoriesConfig = useMemo(() => RepositoriesList, []);

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {repositoriesConfig.map(({ id, title, image, description, href }) => (
                <div key={id} className="group border border-blue900 rounded-sm animate-slide-left">
                    <div className="group-hover:bg-blue900p10 duration-300 p-3">
                        <div className="flex items-center justify-between mb-3">
                            <Link href={href} target="_blank"> <h3 className="text-sm underline">{title}</h3></Link>
                            <Heart className="cursor-pointer" onClick={handleHearthClick} size={25} color={cn(
                                hearth === "unpressed" ? "#002352" : "#b91c1c"
                            )}
                                weight={hearth === "unpressed" ? "light" as IconWeight : "fill" as IconWeight} />
                        </div>
                        <p className="text-xs line-clamp-2">{description}</p>
                    </div>
                    <Link href={href} target="_blank" className="overflow-hidden">
                        <Image className="group-hover:scale-105 ease-out duration-300" src={image} layout="responsive" width={100} height={100} alt={title} />
                    </Link>
                </div>
            ))}
        </div>
    );
}