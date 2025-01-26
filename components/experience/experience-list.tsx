import ExperienceItem from "./experience-item";
import { ExperienceData } from "@/lib/types";

interface ExperienceListProps {
    experience: ExperienceData[];
    isMobile: boolean;
}

export default function ExperienceList({ experience, isMobile }: ExperienceListProps) {

    console.log(experience);
    if (!experience || experience.length === 0) {
        return (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center text-sm text-blue-600">
                No experiences found
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-16">
            {experience.map((exp, index) => (
                <ExperienceItem key={exp.id} experience={exp} index={index} isMobile={isMobile} />
            ))}
        </div>
    );
}