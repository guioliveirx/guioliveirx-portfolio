import { socialsConfig } from "@/config/socials.config";
import Link from "next/link";

export function Contact () {
    const socials = socialsConfig;

    return (
        <>
            {socials && 
                socials.map(({id, title, href, Icon}) => (
                    <li key={id} className="flex items-center gap-2 mb-[10px]">
                        <Icon size={20}/>
                        <Link href={href} title={title} rel="noopener noreferrer" target="_blank" className="text-sm">
                            {title}
                        </Link>
                    </li>
                ))
            }
        </>
    );
}