import AboutPage from "@/components/about-page/AboutPage";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { getAbout, getFooter, getNavigation, getShared } from "@/lib/api";

export default async function About() {
  const aboutData = await getAbout();
  const sharedData = await getShared();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return (
    <>
      <Navigation navigationData={navigationData} />
      <AboutPage aboutPageData={aboutData} sharedData={sharedData} />
      <Footer footerData={footerData} navigationData={navigationData} />
    </>
  );
}
