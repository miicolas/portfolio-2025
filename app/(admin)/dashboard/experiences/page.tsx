import ExperiencesButton from "./_experiences/experiences-dialog-btn";
import ExperiencesTable from "./_experiences/experiences-table";
import { getExperiences } from "@/action/(experiences)/get-experiences/action";
import { ExperienceData } from "@/lib/types";

export default async function Experiences() {

    const data = await getExperiences();

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Experiences</h1>
            <ExperiencesButton />
            <ExperiencesTable experiences={data.content as ExperienceData[]} />
        </div>
    );
}