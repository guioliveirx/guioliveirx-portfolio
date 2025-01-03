import { MainTechnologies } from "@/config/mainTecnologies.config";

export function MainSkills() {
    const skills = MainTechnologies

    return (
        <div className="p-[20px] flex gap-4">
            {skills &&
                skills.map(({ name, src, alt }) => (
                    <span key={name}>
                        <img src={src} alt={alt} width={50} title={name}/>
                    </span>
                ))
            }
        </div>
    );
}