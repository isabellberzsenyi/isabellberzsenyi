
import { createClient } from "@/prismicio";
import { getProject } from "../../../lib/api"

interface PageProps {
  params: {
    uid: string
  }
}

export default async function Page({ params } : PageProps) {
  const project = await getProject(params.uid);
  console.log(project);
  return (
    <div>
      <h1> hello </h1>
      <h3>{project.project_title}</h3>
    </div>
  );
}