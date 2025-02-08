import ExperienceItem from "./experience-item";
import { ExperienceData } from "@/lib/types";

interface ExperienceListProps {
    experience: ExperienceData[];
    isMobile: boolean;
}

export default function ExperienceList({ experience, isMobile }: ExperienceListProps) {

    return (
        <div className="flex flex-col gap-16">
            {experience.map((exp, index) => (
                <ExperienceItem key={exp.id} experience={exp} index={index} isMobile={isMobile} />
            ))}
        </div>
    );
}