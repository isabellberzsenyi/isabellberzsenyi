import AboutPage from "@/components/about-page/AboutPage";
import { getAbout } from "@/lib/api";

export default async function About() {
  const aboutData = await getAbout();

  return (
    <div style={{ textAlign: 'center'}}>
      <AboutPage aboutPageData={aboutData} />
    </div>
  );
}
