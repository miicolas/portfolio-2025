"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/layout/multi-select";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

const frameworksList = [
  { value: "react", label: "React", icon: Turtle },
  { value: "angular", label: "Angular", icon: Cat },
  { value: "vue", label: "Vue", icon: Dog },
  { value: "svelte", label: "Svelte", icon: Rabbit },
  { value: "ember", label: "Ember", icon: Fish },
];
export default function Projects() {

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);


  return (
    <>
      <h1>Projects</h1>
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={5}
      />

    </>
  );
}
