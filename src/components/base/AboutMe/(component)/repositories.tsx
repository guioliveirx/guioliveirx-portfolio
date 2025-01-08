import { RepositoriesList } from "@/config/RepositoriesList.config";
import Image from "next/image";
import Link from "next/link";

export function Repositories () {
    const config = RepositoriesList;

    return (
        <div className="animate-slide-left grid md:grid-cols-2 grid-cols-1 gap-[20px]">
            {config.map(({id, title, description, technologies, path}) => (
                <Link href={path} target="_self" className="flex flex-col p-[10px] gap-[15px] border border-blue900 rounded-md hover:bg-blue900p10 duration-300 ease-in" key={id}>
                    <h3 className="font-bold text-md">{title}</h3>
                    <p className="text-sm text-blue900p80 line-clamp-2">{description}</p>
                    <div className="flex gap-[10px]">
                        {technologies.map((items) => (
                            <span key={items}>
                                <Image src={items} alt="technologies" width={25} height={30}/></span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
}