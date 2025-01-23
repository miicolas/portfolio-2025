import ExperiencesButton from "./_experiences/experiences-dialog-btn";
import ExperiencesTable from "./_experiences/experiences-table";

export default function Experiences() {

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Experiences</h1>
            <ExperiencesButton />
            <ExperiencesTable />
        </div>
    );
}