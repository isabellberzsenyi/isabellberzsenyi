"use client";
import React, { useEffect, useState } from 'react';
import { 
  FooterDocumentData, 
  HomePageDocumentData, 
  NavigationDocumentData, 
  SharedDocumentData 
} from '@/prismicio-types';
import {
  MainContent,
  AnimatedLogo
} from './HomePage.styles';
import { CaseStudyPreview } from '@/app/page';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import WorkSection from './work-section/WorkSection';
import AboutSection from './about-section/AboutSection';
import HomeHeader from './home-header/HomeHeader';
import { breakpointsObj } from "@/lib/responsive";
import { useMatchMedia } from "@/lib/hooks";


interface HomePageProps {
  navigationData: NavigationDocumentData;
  homePageData: HomePageDocumentData;
  sharedData: SharedDocumentData;
  caseStudyPreviews: CaseStudyPreview[];
  footerData: FooterDocumentData;
}

export default function HomePage({ navigationData, homePageData, sharedData, caseStudyPreviews, footerData }: HomePageProps) {
  const {
    home_title: homeTitle,
    scroll_cta_text: scrollCtaText,
    about_header: aboutHeader,
    about_subheader: aboutSubheader,
    about_paragraph: aboutParagraph,
    work_cta_text: workCtaText,
    work_header: workHeader
  } = homePageData;

  const {
    yellow_text: yellowText,
    headshot: headshot
  } = sharedData;

  const [fontSize, setFontSize] = useState<number>(18);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const [showContent, setShowContent] = useState<boolean>(false);

  const isMinTablet = useMatchMedia(`(min-width: ${breakpointsObj.tabletSm}px)`);

  useEffect(() => {
    const targetFontSize = 2;
    let decrementAmount = 1;

    document.body.style.overflowY = 'hidden';
    document.body.style.position = 'fixed';

    const timer = setInterval(() => {
      if (fontSize > targetFontSize) {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
        if (decrementAmount > 1) {
          decrementAmount -= 0.1;
        }
    
        setFontSize(fontSize - decrementAmount);
      } else {
        clearInterval(timer);
        
        setTimeout(() => {
          setLogoOpacity(0);
        }, 1500);
    
        setTimeout(() => {
          document.body.style.overflowY = 'auto';
          document.body.style.position = 'relative';
      
          setTimeout(() => {
            setShowContent(true);
          }, 1500);
        }, 1800);
      }
    }, 10);

    return () => {
      clearInterval(timer);
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'relative';
    };
  }, [fontSize, logoOpacity, showContent, isMinTablet]);

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden',  top: 0, left: 0}}>
      {!showContent && (
        <AnimatedLogo $fontSize={fontSize} $opacity={logoOpacity} >
          <div>
            Izzy <br /> Berzsenyi
          </div>
        </AnimatedLogo>
      )}
      <MainContent $opacity={showContent ? 1 : 0}>
        <Navigation navigationData={navigationData} />
        <HomeHeader
          homeTitle={homeTitle}
          yellowText={yellowText}
          scrollCtaText={scrollCtaText}
        />
        <AboutSection
          aboutHeader={aboutHeader}
          aboutSubheader={aboutSubheader}
          aboutParagraph={aboutParagraph}
          headshot={headshot}
          workCtaText={workCtaText}
        />
        <WorkSection 
          workHeader={workHeader} 
          caseStudyPreviews={caseStudyPreviews} 
        />
        <Footer footerData={footerData} navigationData={navigationData} />
      </MainContent>
    </div>
  );
};
