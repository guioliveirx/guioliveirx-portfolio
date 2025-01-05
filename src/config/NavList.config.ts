import { Nav } from "@/types/nav.type";
import { AddressBook, Briefcase, Code, House } from "@phosphor-icons/react/dist/ssr";


export const NavList: Nav[] = [
    {
        id: 1,
        title: "Início",
        href: "/",
        Icon: House
    },
    {
        id: 2,
        title: "Habilidades",
        href: "/skills",
        Icon: Code
    },
    {
        id: 3,
        title: "Repositórios",
        href: "/repositorios",
        Icon: Briefcase
    },
    {
        id: 4,
        title: "Contatos",
        href: "/contatos",
        Icon: AddressBook
    },
]