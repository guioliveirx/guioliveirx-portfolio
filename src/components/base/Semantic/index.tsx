type SemanticProps = {
    type: "header" | "main" | "footer" | "section"
    children: React.ReactNode
}

export function Semantic({ type, children }: SemanticProps) {
    if (type === "header") {
        return (
            <header>
                {children}
            </header>
        );
    } else if (type === "main") {
        return (
            <main>
                {children}
            </main>
        );
    } else if (type === "section") {
        return (
            <section>
                {children}
            </section>
        );
    }

    return (
        <footer>
            {children}
        </footer>
    );
}