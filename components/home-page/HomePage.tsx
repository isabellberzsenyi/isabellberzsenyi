import React from 'react';
import { HomePageDocumentData, SharedDocumentData } from '@/prismicio-types';
import { 
  AboutSectionContainer, 
  AboutTextWrapper, 
  HomeTitleWrapper, 
  PinkArch, 
  PinkArchContainer, 
  PinkSubheader, 
  WorkLink, 
  WorkLinkWrapper, 
  WorkSectionContainer, 
  WorkPreviewContainer,
  WorkPreviewItem,
  CtaArrow
} from './HomePage.styles';
import { H1, H2, H2Italic, CtaItalic, P } from '@/style/typography';
// import { ProjectDocumentDataWithUID } from '@/lib/types';
import Image from 'next/image';
import { RTParagraphNode } from '@prismicio/client';
import YellowPill from '../yellow-pill/YellowPill';
import { PrismicNextImage } from '@prismicio/next';

interface HomePageProps {
  homePageData: HomePageDocumentData;
  // TODO: fix this type
  projects: any[];
  sharedData: SharedDocumentData;
}

export default function HomePage({ homePageData, projects, sharedData }: HomePageProps) {
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

  return (
    <>
      <HomeTitleWrapper>
        <H1>{homeTitle}</H1>
      </HomeTitleWrapper>
      {
        yellowText && (
          <YellowPill text={yellowText} />
        )
      }
      {/* TODO: add scroll down to about section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CtaItalic>{scrollCtaText}</CtaItalic>
        <CtaArrow>
          <CtaItalic>→</CtaItalic>
        </CtaArrow>
      </div>
      <PinkArchContainer>
        <PinkArch />
      </PinkArchContainer>
      <AboutSectionContainer>
        <div>
          <H2Italic>{aboutHeader}</H2Italic>
          <AboutTextWrapper>
            <PinkSubheader>{aboutSubheader}</PinkSubheader>
            {aboutParagraph.map((node, idx) => {
              const textNode = node as RTParagraphNode;
              return (
              <P key={idx}>{textNode.text}</P>
              )
            })}
            <WorkLinkWrapper>
              <WorkLink href="#projects">{workCtaText}</WorkLink>
            </WorkLinkWrapper>
          </AboutTextWrapper>
        </div>
        {/* <PrismicNextImage 
          style={{ marginLeft: '5em', filter: 'grayscale(100%)', borderRadius: '10px' }}
          field={headshot} 
          width={headshot.dimensions?.width || 100} 
          height={headshot.dimensions?.height || 100} 
        /> */}
      </AboutSectionContainer>

      <WorkSectionContainer>
        <H2 id="projects">{workHeader}</H2>
        <WorkPreviewContainer>
          {
            projects.map((project) => {
              return (
                <WorkPreviewItem key={project.uid}>
                  <P>{project.project_title}</P>
                </WorkPreviewItem>
              )
            })
          }
        </WorkPreviewContainer>
      </WorkSectionContainer>
    </>
  );
};
