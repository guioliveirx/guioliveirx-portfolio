import { RepositoriesList } from "@/config/RepositoriesList.config";
import Image from "next/image";

export function Repositories () {
    const config = RepositoriesList;

    return (
        <div className="flex flex-wrap gap-[20px]">
            {config.map(({id, title, description, technologies}) => (
                <div className="flex flex-col p-[10px] gap-[15px] border border-blue900 w-[420px] rounded-md hover:bg-blue900p10" key={id}>
                    <h3 className="font-bold text-md">{title}</h3>
                    <p className="text-sm text-blue900p80 line-clamp-2">{description}</p>
                    <div className="flex gap-[10px]">
                        {technologies.map((items) => (
                            <span key={items}>
                                <Image src={items} alt="technologies" width={25} height={30}/></span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}