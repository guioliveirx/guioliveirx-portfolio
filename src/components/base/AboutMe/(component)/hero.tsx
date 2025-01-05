import { socialsConfig } from "@/config/socials.config";
import Link from "next/link";

export function Hero() {
    const socials = socialsConfig;

    return (
        <div className="flex flex-col gap-[10px] bg-gradient-to-r from-sky-700 to-red-700 p-[20px] rounded text-blue100 ">
            <h2 className="tracking-widest font-bold">Front-end Developer</h2>
            <p className="leading-6 text-sm text-blue100p80">Sou estudante de Ciências da Computação no IFBA, com paixão pelo desenvolvimento Front-End. Possuo experiência em projetos que utilizam tecnologias como HTML, CSS, JavaScript e frameworks modernos. Busco uma oportunidade para aplicar meu conhecimento em programação, design de interfaces e otimização de soluções digitais, contribuindo para projetos inovadores.</p>
            <div className="flex gap-[10px] py-[10px]">
                {socials.map(({ id, Icon, title, href }) => (
                    <Link className="p-[5px] border rounded-md transition-all duration-300 hover:bg-blue100p20" href={href} title={title} rel="noopener noreferrer" target="_blank" key={id}>
                        <Icon size={25}></Icon>
                    </Link>
                ))}
            </div>
        </div>
    );
}