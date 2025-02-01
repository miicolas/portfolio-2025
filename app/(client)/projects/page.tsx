import { Suspense } from "react";
import FilterListProjects from "./_projects/filter-list-projects";
import { getProjects } from "@/action/(projects)/get-projects/action";
import { ProjectData } from "@/lib/types";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

export default async function Projects() {
  const data = await getProjects();
  return (

    <Suspense fallback={<div>Loading projects...</div>}>
      <FilterListProjects
        frameworksList={frameworksList}
        projects={data.projects as ProjectData[]}

      />
    </Suspense>
  );
}
