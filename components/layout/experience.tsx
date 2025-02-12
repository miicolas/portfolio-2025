import ExperienceHeader from "../experience/experience-header";
import ExperienceContent from "../experience/experience-content";
import { getExperiences } from "@/action/(experiences)/get-experiences/action";
import { ExperienceData } from "@/lib/types";

export default async function Experience() {

    const data = await getExperiences();

    
    return (
        <div className="py-16 max-w-4xl mx-auto space-y-16" id="experience">
            <ExperienceHeader />
            <ExperienceContent experience={data?.content as ExperienceData[]} />
        </div>
    );
}