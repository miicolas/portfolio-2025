import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from 'next/image';
import getProjectById from "@/action/(projects)/get-project/action";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";


type PageProps = Promise<{ slug: string[] }>;

export default async function ProjectPage(props: { params: PageProps }) {
  const { slug } = await props.params;
  const projectId = slug[1];
  const project = await getProjectById(projectId);

  if (!project || project instanceof Response) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-gray-500">
        Project not found
      </div>
    );
  }

  const techStackArray = project.tech_stack ? project.tech_stack.split(",").map(t => t.trim()) : [];

  return (
    <div className="mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 mb-8">
          <div className="flex gap-2 items-center">
            <Link href="/projects" className='border border-transparent p-2 rounded-lg hover:border-neutral-500 hover:text-neutral-900 transition-all duration-300 ease-in-out'>
              <ArrowLeft className="h-6 w-6 text-neutral-500" />
            </Link>

            <h1 className="text-3xl font-bold">{project.name}</h1>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild size="sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Project
                </a>
              </Button>
            )}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techStackArray.map((tech, index) => (
                <Badge
                key={index}
                variant="secondary"
                className="text-xs font-neueMontreal font-light border border-neutral-200 dark:border-neutral-800"
            >
                {tech}
            </Badge>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-16 self-start space-y-6">
            {project.image_preview && project.image_preview !== "" && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image_preview}
                  alt={`${project.name} preview`}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
            )}

            {project.image_preview_secondary && project.image_preview_secondary !== "" && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image_preview_secondary}
                  alt={`${project.name} secondary preview`}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}