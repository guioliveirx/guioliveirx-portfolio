import { Repositories } from "@/types/repositories.type";

export const RepositoriesList : Repositories[] = [
    {
        id: 1,
        title: "Portfolio",
        image: "/repositories/Portfolio-wide-light.png",
        description: "Este é o meu site portfolio, site desenvolvido em React com o NextJS 15. O site demonstra todas as minhas habilidades, quem sou eu, meus contatos e meus repositórios.",
        technologies: ["/repositories/React-Dark.svg", "/repositories/NextJS-Dark.svg", "/repositories/TailwindCSS-Dark.svg", "/repositories/TypeScript.svg"],
        path: "/repositories",
        href: "/"
    },
    {
        id: 2,
        title: "Caravan",
        image: "/repositories/Caravan.png",
        description: "Site de Planos para Viagens. Em sua construção foi o utilizado do Framework Bootstrap.",
        technologies: ["/repositories/Bootstrap.svg","/repositories/HTML.svg","/repositories/CSS.svg"],
        path: "/repositories",
        href: "https://caravanstrip.vercel.app/"
    },
    {
        id: 3,
        title: "React-clock",
        image: "/repositories/React-clock.png",
        description: "Site de um relógio digital, feito para treinamento de habilidades adquiridas em react utilizando também o tailwind como framework.",
        technologies: ["/repositories/React-Dark.svg", "/repositories/NextJS-Dark.svg", "/repositories/TailwindCSS-Dark.svg", "/repositories/TypeScript.svg"],
        path: "/repositories",
        href: "https://clockreact.vercel.app/"
    }
]