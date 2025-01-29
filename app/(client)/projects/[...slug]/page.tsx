import getProjectById from "@/action/(projects)/get-project/action";


type PageProps = Promise<{ slug: string[] }>;

export default async function ProjectPage(props: { params : PageProps}) {
  const { slug } = await props.params;
  const projectId = slug[1];
  const project = await getProjectById(projectId);
  
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