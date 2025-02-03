import ProjectsButton from "./_projects/projects-dialog-btn";
import ProjectsTable from "./_projects/projects-table";
import { getProjects } from "@/action/(projects)/get-projects/action"
import { ProjectData } from "@/lib/types"

export default async function Projects() {

    const data = await getProjects();

    return (
        <div className="w-full mt-10 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">Projects</h1>
            <ProjectsButton />
            <ProjectsTable projects={data.projects as ProjectData[]} />
        </div>
    );
}