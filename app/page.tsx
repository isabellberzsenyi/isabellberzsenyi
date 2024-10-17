import Footer from "@/components/footer/Footer";
import HomePage from "@/components/home-page/HomePage";
import Navigation from "@/components/navigation/Navigation";
import { getFooter, getNavigation, getHome, getShared } from "@/lib/api";
// import { ProjectDocumentDataWithUID } from "@/lib/types";
import { FooterDocumentData, HomePageDocumentData, NavigationDocumentData, SharedDocumentData } from "@/prismicio-types";

export default async function Home() {
  const homeData: HomePageDocumentData = await getHome();
  const sharedData: SharedDocumentData = await getShared();
  const navigationData: NavigationDocumentData = await getNavigation();
  const footerData: FooterDocumentData = await getFooter();
  // const projects: ProjectDocumentDataWithUID[] = await getAllProjects();

  return (
    <div style={{ textAlign: 'center'}}>
      <Navigation navigationData={navigationData} />
      <HomePage homePageData={homeData} projects={[]} sharedData={sharedData} />
      <Footer footerData={footerData} navigationData={navigationData} />
    </div>
  );
}
