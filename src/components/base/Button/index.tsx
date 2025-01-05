import Link from "next/link";

export function Button () {
    return (
        <Link className="hover:bg-blue900p10 duration-300 ease-in text-center p-[15px] border rounded-md border-blue900" href="/skills" rel="noopener noreferrer">Ver todos</Link>
    );
}