"use client";
import React, { useEffect, useState, useRef } from 'react';
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
  CtaArrow,
  WorkPreviewImage
} from './HomePage.styles';
import { H1, H2, H2Italic, CtaItalic, P, H3, fontWeights } from '@/style/typography';
import { RTParagraphNode } from '@prismicio/client';
import YellowPill from '../yellow-pill/YellowPill';
import { CaseStudyPreview } from '@/app/page';
import Link from 'next/link';

interface HomePageProps {
  homePageData: HomePageDocumentData;
  // TODO: fix this type
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
        <H2 id="projects" style={{ textAlign: 'left', marginLeft: '10%' }}>{workHeader}</H2>
        <div style={{ marginTop: '2em', position: 'relative', marginBottom: '2em' }}> 
        <WorkPreviewContainer style={{
                maxWidth: '110vw',
                display: 'flex',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                marginLeft: '-10%',
                paddingLeft: '10%'
              }}>
          <div style={{ flex: '0 0 10%'}}></div>
          {
            caseStudyPreviews.map((caseStudyPreview: CaseStudyPreview) => {
              return (
                <>
                  <Link style={{ textDecoration: 'none' }} href={`/case-study/${caseStudyPreview.uid}`}>
                    <WorkPreviewItem key={caseStudyPreview.uid} style={{ textAlign: 'left' }}>
                      <WorkPreviewImage 
                        imageUrl={caseStudyPreview.imageUrl}
                      />
                      <H3 style={{ fontSize: '2.5em', fontWeight: 200 }}>{caseStudyPreview.title}</H3>
                      <P style={{ fontSize: '1em', margin: '0' }}>{caseStudyPreview.previewText}</P>
                    </WorkPreviewItem>
                  </Link>
                  <WorkPreviewItem key={caseStudyPreview.uid + '2'} style={{ textAlign: 'left' }}>
                    <WorkPreviewImage 
                      imageUrl={caseStudyPreview.imageUrl}
                      // src={caseStudyPreview.imageUrl}
                      // alt={caseStudyPreview.title}
                      // width={780}
                      // height={400}
                    />
                    <H3 style={{ fontSize: '2.5em', fontWeight: 200 }}>{caseStudyPreview.title}</H3>
                    <P style={{ fontSize: '1em', margin: '0' }}>{caseStudyPreview.previewText}</P>
                  </WorkPreviewItem>
                </>
              )
            })
          }
          </WorkPreviewContainer>
        </div>
      </WorkSectionContainer>
    </>
  );
};
