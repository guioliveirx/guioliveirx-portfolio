import { Repositories } from "@/types/repositories.type";

export const RepositoriesList : Repositories[] = [
    {
        id: 1,
        title: "Portfolio",
        description: "Site portfolio para uma introdução sobre mim, minhas experiências, meus trabalhos contato.",
        technologies: ["https://skillicons.dev/icons?i=react","https://skillicons.dev/icons?i=nextjs","https://skillicons.dev/icons?i=tailwind"]
    },
    {
        id: 2,
        title: "Caravan",
        description: "Site de Planos para Viagens. Em sua construção foi o utilizado do Framework Bootstrap.",
        technologies: ["https://skillicons.dev/icons?i=bootstrap","https://skillicons.dev/icons?i=html","https://skillicons.dev/icons?i=css"]
    },
    {
        id: 3,
        title: "React-clock",
        description: "Site de um relógio digital, feito para treinamento de habilidades adquiridas em react utilizando também o tailwind como framework.",
        technologies: ["https://skillicons.dev/icons?i=react","https://skillicons.dev/icons?i=nextjs","https://skillicons.dev/icons?i=tailwind"]
    }
]