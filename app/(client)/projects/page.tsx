import { Suspense } from "react";
import FilterListProjects from "./_projects/filter-list-projects";
import { getProjects } from "@/action/(projects)/get-projects/action";
import { ProjectData } from "@/lib/types";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "next.js", label: "Next.js" },
  { value: "node.js", label: "Node.js" },
  { value: "express.js", label: "Express.js" },
  { value: "tailwind css", label: "Tailwind CSS" },
  { value: "typescript", label: "TypeScript" },

];

export default async function Projects() {
  const data = await getProjects();
  return (

    <Suspense fallback={<div>Loading projects...</div>}>
      <FilterListProjects
        frameworksList={frameworksList}
        projects={data.content as ProjectData[]}
      />
    </Suspense>
  );
}
