import ProjectsButton from "./_projects/projects-dialog-btn";
import ProjectsTable from "./_projects/projects-table";

export default function Skills() {

    

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Projects</h1>
            <ProjectsButton />
            <ProjectsTable />
        </div>
    );
}