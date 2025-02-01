"use client";

import { useState } from "react";
import { MultiSelect } from "@/components/layout/multi-select";
import ListProjects from "./list-projects";
import { ProjectData } from "@/lib/types";

type Framework = {
    label: string;
    value: string;
};

export default function FilterListProjects({ frameworksList, projects }: { frameworksList: Framework[], projects: ProjectData[] }) {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  return (
    <div className="py-16">
      <MultiSelect
        options={frameworksList.map(framework => ({ label: framework.label, value: framework.value }))}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={5}
      />
      <ListProjects filterFrameworks={selectedFrameworks} projects={projects} />
    </div>
  );
}