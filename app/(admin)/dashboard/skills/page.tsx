import SkillsDialogButton from "./_skills/skills-dialog-btn";
import SkillsTable from "./_skills/skills-table";
import { getSkills } from "@/action/(skills)/get-skills/action";
import { SkillData } from "@/lib/types";

export default async function Skills() {

    const data = await getSkills();

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Skills</h1>
            <SkillsDialogButton />
            <SkillsTable skills = {data?.skills as SkillData[]} />
        </div>
    );
}