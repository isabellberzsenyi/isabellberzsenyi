import CaseStudyPage from "@/components/case-study-page/CaseStudyPage";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { getCaseStudy, getNavigation, getFooter } from "@/lib/api";
import { CaseStudyDocumentData } from "@/prismicio-types";
import { colors } from "@/style/colors";

interface PageProps {
  params: {
    uid: string
  }
}


export default async function CaseStudy({ params }: PageProps) {
  const caseStudyData: CaseStudyDocumentData = await getCaseStudy(params.uid);
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  
  return (
    <div style={{ backgroundColor: colors.PEACH }}>
      <Navigation navigationData={navigationData}  backgroundColor={colors.PEACH}/>
      <CaseStudyPage caseStudyData={caseStudyData} />
      <Footer footerData={footerData} navigationData={navigationData} />
    </div>
  );
}
