import { NavList } from "@/config/NavList.config";
import { AddressBook, Briefcase, Code, House, List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Navigation() {
    const navConfig = NavList;

    return (
        <ul className="grid gap-2">
            {navConfig.map(({ id, title, href, Icon }) => (
                <li className="hover:bg-blue100p20 duration-300 rounded " key={id}>
                    <Link className="flex items-center gap-3 p-2" href={href}>
                        <Icon size={20} color="#f5efef" weight="light"/>
                        <span className="text-sm">{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}