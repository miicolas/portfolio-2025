import ExperienceItem from "./experience-item";

interface ExperienceItemProps {
    experience: {
        id: string;
        company: string;
        position: string;
        startDate: string;
        endDate: string;
        image: string;
    }[];
    isMobile: boolean;
}


export default function ExperienceList({ experience , isMobile } : ExperienceItemProps) {
    return (
        <div className="flex flex-col gap-16">
            {experience.map((exp, index) => (
                <ExperienceItem key={exp.id} experience={experience} index={index} isMobile={isMobile} />
            ))}
        </div>
    );
}