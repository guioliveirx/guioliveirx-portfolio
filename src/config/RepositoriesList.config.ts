import { Repositories } from "@/types/repositories.type";

export const RepositoriesList : Repositories[] = [
    {
        id: 1,
        title: "Portfolio",
        image: "/repositories/Portfolio.webp",
        description: "Este é o meu site portfolio, site desenvolvido em React com o NextJS 15. O site demonstra todas as minhas habilidades, quem sou eu, meus contatos e meus repositórios.",
        technologies: ["/skills/React-Dark.svg", "/skills/NextJS-Dark.svg", "/skills/TailwindCSS-Dark.svg", "/skills/TypeScript.svg"],
        path: "/repositories",
        href: "/"
    },
    {
        id: 2,
        title: "Caravan",
        image: "/repositories/Caravan.webp",
        description: "Site de Planos para Viagens. Em sua construção foi o utilizado do Framework Bootstrap.",
        technologies: ["/skills/Bootstrap.svg","/skills/HTML.svg","/skills/CSS.svg"],
        path: "/repositories",
        href: "https://caravanstrip.vercel.app/"
    },
    {
        id: 3,
        title: "React-clock",
        image: "/repositories/React-clock.webp",
        description: "Site de um relógio digital, feito para treinamento de habilidades adquiridas em react utilizando também o tailwind como framework.",
        technologies: ["/skills/React-Dark.svg", "/skills/NextJS-Dark.svg", "/skills/TailwindCSS-Dark.svg", "/skills/TypeScript.svg"],
        path: "/repositories",
        href: "https://clockreact.vercel.app/"
    }
]