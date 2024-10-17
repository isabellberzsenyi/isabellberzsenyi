import Footer from "@/components/footer/Footer";
import HomePage from "@/components/home-page/HomePage";
import Navigation from "@/components/navigation/Navigation";

import { getFooter, getNavigation, getHome, getShared, getCaseStudies } from "@/lib/api";
// import { ProjectDocumentDataWithUID } from "@/lib/types";
import { CaseStudyDocument, FooterDocumentData, HomePageDocumentData, NavigationDocumentData, SharedDocumentData } from "@/prismicio-types";
import { KeyTextField } from "@prismicio/client";

export interface CaseStudyPreview {
  uid: string;
  title: string;
  imageUrl: string;
  previewText: string;
}

export default async function Home() {
  const homeData: HomePageDocumentData = await getHome();
  const sharedData: SharedDocumentData = await getShared();
  const navigationData: NavigationDocumentData = await getNavigation();
  const footerData: FooterDocumentData = await getFooter();
  const caseStudies: CaseStudyDocument[] = await getCaseStudies();

  const caseStudyPreviews: CaseStudyPreview[] = 
    caseStudies.map((caseStudy: CaseStudyDocument) => {
      return {
        uid: caseStudy.uid,
        title: caseStudy.data.case_study_title || '',
        previewText: caseStudy.data.case_study_preview || '',
        imageUrl: caseStudy.data.case_study_image?.url ?? ''
      };
    });


  return (
    <div style={{ textAlign: 'center'}}>
      <Navigation navigationData={navigationData} />
      <HomePage homePageData={homeData} sharedData={sharedData} caseStudyPreviews={caseStudyPreviews} />
      <Footer footerData={footerData} navigationData={navigationData} />
    </div>
  );
}
