import { MenuList, SocialList } from "@/config/NavList.config";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavigationProps = {
    variant?: "col" | "row" | "skills";
    type?: "header" | "main" | "footer" | "sidebar";
}

export function Navigation({ variant = "row", type }: NavigationProps) {
    const skillsConfig = MenuList;
    const socialConfig = SocialList;
    const choose = variant === "skills" ? skillsConfig : socialConfig;

    if (type === "footer") {
        return (
            <ul className="md:relative flex md:flex-col md:h-[100%] h-[50px] md:w-[70px] w-[100%] justify-center items-center gap-12">
                {skillsConfig.map(({ id, Icon, title, href }) => (
                    <li key={id}>
                        <Link title={title} href={href}>
                            <Icon size={30} color="#f5efef" weight="light" />
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul className={cn(
            type === "header" && "pt-2.5 ps-2.5",
            type === "sidebar" && "grid gap-2",
            type === "main" && "flex gap-2.5 py-2.5"
        )}>
            {
                choose.map(({ id, title, href, Icon }) => (
                    <li key={id} className={cn(
                        type === "header" && "mb-2.5",
                        type === "sidebar" && "hover:bg-blue100p20 duration-300 rounded",
                        type === "main" && "flex border rounded-md"
                    )}>
                        <Link href={href} title={title} rel="noopener noreferrer" target={variant === "skills" ? "_self" : "_blank"} className={cn(
                            type === "header" && "text-sm text-blue100 flex items-center gap-2 hover:gap-3 hover:underline duration-300",
                            type === "sidebar" && "flex items-center gap-2 p-1",
                            type === "main" && "p-[5px] transition-all duration-300 hover:bg-blue100p20"
                        )}>
                            <Icon size={20} color="#f5efef" weight="light" />
                            {type != "main" &&
                                <span className="text-sm">{title}</span>
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}