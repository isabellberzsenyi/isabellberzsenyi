import HomePage from "@/components/home-page/HomePage";
import { getHome } from "@/lib/api";
// import { ProjectDocumentDataWithUID } from "@/lib/types";
import { HomePageDocumentData } from "@/prismicio-types";

export default async function Home() {
  const homeData: HomePageDocumentData = await getHome();
  // const projects: ProjectDocumentDataWithUID[] = await getAllProjects();

  return (
    <div style={{ textAlign: 'center'}}>
      <HomePage homePageData={homeData} projects={[]} />
    </div>
  );
}
