import SkillsDialogButton from "./_skills/skills-dialog-btn";
import SkillsTable from "./_skills/skills-table";

export default function Skills() {

    

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Skills</h1>
            <SkillsDialogButton />
            <SkillsTable />
        </div>
    );
}