import { Skills } from "@/components/base/Skills";
import Link from "next/link";

export default function SkillsPage() {
    return (
        <>
            <Link className="inline-flex gap-1 items-center duration-300 hover:gap-2 hover:underline hover:decoration-solid text-md" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>Voltar</Link>
            <Skills/>
        </>

    );
}