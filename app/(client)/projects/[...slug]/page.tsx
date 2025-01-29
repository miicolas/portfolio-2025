import getProjectById from "@/action/(projects)/get-project/action";

export default async function ProjectPage({ params }: { params: { slug: string, id: string } }) {

  const project = await getProjectById(params.slug[1]);

  if (!project || project instanceof Response) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}