import React from 'react';
import { HomePageDocumentData } from '@/prismicio-types';
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
  YellowPillWrapper, 
  WorkPreviewItem,
  CtaArrow
} from './HomePage.styles';
import { H1, H2, H2Italic, YellowPill, CtaItalic, P } from '@/style/typography';
import { ProjectDocumentDataWithUID } from '@/lib/types';
import Image from 'next/image';
import { RTParagraphNode } from '@prismicio/client';

interface HomePageProps {
  homePageData: HomePageDocumentData;
  projects: ProjectDocumentDataWithUID[];
}

export default function HomePage({ homePageData, projects }: HomePageProps) {
  const {
    home_title: homeTitle,
    yellow_text: yellowText,
    scroll_cta_text: scrollCtaText,
    about_header: aboutHeader,
    about_subheader: aboutSubheader,
    about_paragraph: aboutParagraph,
    work_cta_text: workCtaText,
    work_header: workHeader
  } = homePageData;

  return (
    <>
      <HomeTitleWrapper>
        <H1>{homeTitle}</H1>
      </HomeTitleWrapper>
      <YellowPillWrapper>
        <YellowPill>
          {yellowText?.toUpperCase()}
        </YellowPill>
      </YellowPillWrapper>
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
