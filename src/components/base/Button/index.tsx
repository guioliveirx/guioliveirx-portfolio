import Link from "next/link";

export function Button () {
    return (
        <Link className="text-center p-[15px] border rounded-md border-blue900" href="/skills" rel="noopener noreferrer">Ver todos</Link>
    );
}