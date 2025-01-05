import { socialsConfig } from "@/config/socials.config";
import Link from "next/link";

export function Contact() {
    const socials = socialsConfig;

    return (
        <>
            {socials &&
                socials.map(({ id, title, href, Icon }) => (
                    <li key={id} className="mb-[10px]">
                        <Link href={href} title={title} rel="noopener noreferrer" target="_blank" className="text-sm text-blue100 flex items-center gap-2 hover:gap-3 hover:underline duration-300">
                            <Icon size={20} />
                            {title}
                        </Link>
                    </li>
                ))
            }
        </>
    );
}