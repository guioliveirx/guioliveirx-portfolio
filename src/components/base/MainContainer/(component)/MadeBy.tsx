import Link from "next/link";

export function MadeBy() {
    const year = new Date().getFullYear()
    
    return (
        <span className="flex items-end gap-1 justify-center text-xs text-center h-full">
            © {year} By
            <Link
                href="https://wa.me/5571981847173?text=Ol%C3%A1+Guilherme%21"
                target="_blank"
                className="text-sky-300"
            >
                Guilherme
            </Link>
        </span>
    );
}