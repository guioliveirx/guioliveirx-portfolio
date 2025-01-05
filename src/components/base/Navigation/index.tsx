import { MenuList, SocialList } from "@/config/NavList.config";
import Link from "next/link";

type NavigationProps = {
    variant?: "col" | "row";
    type?: "header" | "main" | "skill" | "social";
}

export function Navigation({ variant = "row", type }: NavigationProps) {
    const navConfig = MenuList;
    const socialConfig = SocialList;
    const choose = type === "skill" ? navConfig : socialConfig;

    if (type === "header") {
        return (
            <ul className="pt-[10px] ps-[10px]">
                {
                    socialConfig.map(({ id, title, href, Icon }) => (
                        <li key={id} className="mb-[10px]">
                            <Link href={href} title={title} rel="noopener noreferrer" target="_blank" className="text-sm text-blue100 flex items-center gap-2 hover:gap-3 hover:underline duration-300">
                                <Icon size={20} />
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        );
    }

    if (type === "main") {
        return (
            <ul className="flex gap-[10px] py-[10px]">
                {socialConfig.map(({ id, Icon, title, href }) => (
                    <Link className="p-[5px] border rounded-md transition-all duration-300 hover:bg-blue100p20" href={href} title={title} rel="noopener noreferrer" target="_blank" key={id}>
                        <Icon size={25}></Icon>
                    </Link>
                ))}
            </ul>
        )
    }

    return (
        <ul className="grid gap-2">
            {
                choose.map(({ id, title, href, Icon }) => (
                    <li className="hover:bg-blue100p20 duration-300 rounded " key={id}>
                        <Link className="flex items-center gap-3 p-2" href={href}>
                            <Icon size={20} color="#f5efef" weight="light" />
                            <span className="text-sm">{title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}