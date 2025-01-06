import { Nav } from "@/types/nav.type";
import { AddressBook, Briefcase, Code, House, MapPin, GithubLogo, LinkedinLogo, WhatsappLogo, FilePdf } from "@phosphor-icons/react/dist/ssr";


export const MenuList: Nav[] = [
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
        href: "https://linkedin.com/in/guioliveira2002",
        Icon: Briefcase
    },
    {
        id: 4,
        title: "Contatos",
        href: "https://wa.me/5571981847173",
        Icon: AddressBook
    },
]

export const SocialList: Nav[] = [
    {   
        id: 1,
        title: "Camaçari",
        href: "/",
        Icon: MapPin,
    },
    {
        id: 2,
        title: "Github",
        href: "https://github.com/guioliveirx",
        Icon: GithubLogo,
    },
    {
        id: 3,
        title: "LinkedIn",
        href: "https://linkedin.com/in/guioliveira2002",
        Icon: LinkedinLogo,
    },
    {
        id: 4,
        title: "Whatsapp",
        href: "https://wa.me/5571981847173",
        Icon: WhatsappLogo,
    },
    {
        id: 5,
        title: "Currículo",
        href: "https://drive.google.com/file/d/1FOUvkx6M9YcWpum27d2FUfdseKPyNdci/view?usp=drive_link",
        Icon: FilePdf,
    },
]