import Footer from "@/components/footer/Footer";
import HomePage from "@/components/home-page/HomePage";
import Navigation from "@/components/navigation/Navigation";
import { H1 } from "@/style/typography";
import { getFooter, getNavigation, getHome, getShared, getCaseStudies } from "@/lib/api";
import { CaseStudyDocument, FooterDocumentData, HomePageDocumentData, NavigationDocumentData, SharedDocumentData } from "@/prismicio-types";
import React, { useEffect, useState } from "react";
import { AnimatedLogo, MainContent } from "@/components/home-page/HomePage.styles";

export interface CaseStudyPreview {
  uid: string;
  title: string;
  imageUrl: string;
  previewText: string;
}


export default async function Home() {
  const homeData = await getHome();
  const sharedData = await getShared();
  const navigationData = await getNavigation();
  const footerData = await getFooter();
  const caseStudies = await getCaseStudies();

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
      <HomePage 
        navigationData={navigationData} 
        homePageData={homeData} 
        sharedData={sharedData} 
        caseStudyPreviews={caseStudyPreviews} 
        footerData={footerData} 
      />
    </div>
  );
};
