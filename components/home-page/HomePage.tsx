"use client";
import React from 'react';
import { HomePageDocumentData, SharedDocumentData } from '@/prismicio-types';
import { 
  AboutSectionContainer, 
  AboutTextWrapper, 
  HomeTitleWrapper, 
  PinkArch, 
  PinkArchContainer, 
  WorkLink, 
  WorkLinkWrapper, 
  WorkSectionContainer, 
  WorkPreviewContainer,
  WorkPreviewItem,
  CtaArrow,
  WorkPreviewImage,
  CtaArrowWrapper,
  AboutSectionSubheader,
  WorkSectionH2,
  AboutSectionH2,
  AboutTextImageWrapper
} from './HomePage.styles';
import { EmptyScrollDiv, HeadshotImage, StyledLink } from '@/style/shared.styles';
import { H1, P, H3 } from '@/style/typography';
import { RTParagraphNode } from '@prismicio/client';
import YellowPill from '../yellow-pill/YellowPill';
import { CaseStudyPreview } from '@/app/page';

interface HomePageProps {
  homePageData: HomePageDocumentData;
  sharedData: SharedDocumentData;
  caseStudyPreviews: CaseStudyPreview[];
}

export default function HomePage({ homePageData, sharedData, caseStudyPreviews }: HomePageProps) {
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
      { yellowText && (
        <YellowPill text={yellowText} />
      )}
      <CtaArrowWrapper>
        {scrollCtaText}
        <CtaArrow>
          →
        </CtaArrow>
      </CtaArrowWrapper>

      <PinkArchContainer>
        <PinkArch />
      </PinkArchContainer>

      <AboutSectionContainer>
        <AboutSectionH2>{aboutHeader}</AboutSectionH2>
        <AboutTextImageWrapper>
          <AboutTextWrapper>
            <AboutSectionSubheader>{aboutSubheader}</AboutSectionSubheader>
            { aboutParagraph.map((node, idx) => {
              const textNode = node as RTParagraphNode;
              return (
                <P key={idx}>{textNode.text}</P>
              );
            })}
            <WorkLinkWrapper>
              <WorkLink href="#projects">{workCtaText}</WorkLink>
            </WorkLinkWrapper>
          </AboutTextWrapper>
          <HeadshotImage
            field={headshot} 
            width={400} 
            height={540} 
          />
        </AboutTextImageWrapper>
      </AboutSectionContainer>

      <WorkSectionContainer>
        <WorkSectionH2 id="projects">{workHeader}</WorkSectionH2>
        <WorkPreviewContainer>
          <EmptyScrollDiv></EmptyScrollDiv>
          { caseStudyPreviews.map((caseStudyPreview: CaseStudyPreview) => (
            <StyledLink 
              href={`/case-study/${caseStudyPreview.uid}`} 
              noUnderlineOnHover={true}
            >
              <WorkPreviewItem key={caseStudyPreview.uid}>
                <WorkPreviewImage imageUrl={caseStudyPreview.imageUrl} />
                <H3 style={{ fontSize: '2.5em', fontWeight: 200 }}>{caseStudyPreview.title}</H3>
                <P style={{ fontSize: '1em', margin: '0' }}>{caseStudyPreview.previewText}</P>
              </WorkPreviewItem>
            </StyledLink>
          ))}
        </WorkPreviewContainer>
      </WorkSectionContainer>
    </>
  );
};
