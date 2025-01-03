import { Nav } from "@/types/nav.type";

import { MapPin, GithubLogo, LinkedinLogo, WhatsappLogo, FilePdf } from "@phosphor-icons/react";

export const socialsConfig: Nav[] = [
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
        href: "https://wa.me/1234567890",
        Icon: WhatsappLogo,
    },
    {
        id: 5,
        title: "Currículo",
        href: "https://drive.google.com/file/d/1FOUvkx6M9YcWpum27d2FUfdseKPyNdci/view?usp=drive_link",
        Icon: FilePdf,
    },
];