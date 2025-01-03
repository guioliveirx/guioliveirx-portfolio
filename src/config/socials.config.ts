import { Nav } from "@/types/nav.type";

import {MapPin, GithubLogo, LinkedinLogo, WhatsappLogo, FilePdf, } from "@phosphor-icons/react";

export const socialsConfig: Nav[] = [
    {
        title: "Github",
        href: "https://github.com/guioliveirx",
        Icon: GithubLogo,
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/guioliveira2002",
        Icon: LinkedinLogo,
    },
    {
        title: "Whatsapp",
        href: "https://wa.me/5571981847173?text=Ol%C3%A1+Guilherme%21",
        Icon: WhatsappLogo,
    },
    {
        title: "Curriculo",
        href: "https://drive.google.com/file/d/1FOUvkx6M9YcWpum27d2FUfdseKPyNdci/view?usp=sharing",
        Icon: FilePdf,
    },
]