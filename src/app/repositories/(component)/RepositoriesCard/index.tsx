import { Heart } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function RepositoriesCard() {
    return (
        <div className="grid md:grid-cols-2 gap-2 border border-blue-600 p-1">
            <div className="border border-red-600 p-1">
                <div className="group border-blue-600 rounded-sm">
                    <div className="group-hover:bg-blue900p10 duration-300 p-2">
                        <Heart size={25} />
                        <h3 className="text-sm mb-2 underline">Site portfolio</h3>
                        <p className="text-xs line-clamp-2">Este é o meu site portfolio, site desenvolvido em React com o NextJS 15. O site demonstra todas as minhas habilidades, quem sou eu, meus contatos e meus repositórios.</p>
                    </div>
                    <div className="overflow-hidden">
                        <Image className="group-hover:scale-105 ease-out duration-300" src="/repositories/Portfolio-wide-light.png" layout="responsive" width={100} height={100} alt="Image do projeto portfolio" />
                    </div>
                </div>
            </div>
            <div className="border border-red-600">

            </div>
            <div className="border border-red-600">

            </div>
            <div className="border border-red-600">

            </div>
        </div>
    );
}