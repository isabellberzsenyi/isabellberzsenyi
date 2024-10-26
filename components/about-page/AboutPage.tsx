'use client';

import { AboutPageDocumentData, SharedDocumentData } from "@/prismicio-types"
import { CtaItalic, H3, P } from "@/style/typography";
import { RTParagraphNode } from "@prismicio/client";
import YellowPill from "../yellow-pill/YellowPill";
import { 
  CeramicsImage, 
  AboutSectionContainer, 
  AboutTextWrapper, 
  AboutHeaderWrapper, 
  AboutH3Underline, 
  AboutParagraphWrapper, 
  CeramicSectionContainer, 
  AboutLeftPadding, 
  CeramicsImagesContainer, 
  CeramicsTextWrapper
} from "./AboutPage.styles";
import { EmptyScrollDiv, HeadshotImage } from "@/style/shared.styles";

interface AboutPageProps {
  aboutPageData: AboutPageDocumentData;
  sharedData: SharedDocumentData;
}

export default function AboutPage({ aboutPageData, sharedData }: AboutPageProps) {
  const {
    about_title_row_1: aboutTitleRow1,
    about_title_row_2_italic: aboutTitleRow2Italic,
    about_title_row_2_normal: aboutTitleRow2Normal,
    about_title_row_3: aboutTitleRow3,
    about_paragraph: aboutParagraph,
    ceramics_title: ceramicsTitle,
    ceramics_paragraph: ceramicsParagraph,
    instagram_handle: instagramHandle,
    slices: ceramicsImageSlices
  } = aboutPageData;

  const {
    yellow_text: yellowText,
    headshot: headshot
  } = sharedData;

  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;

  return (
    <>
      <AboutSectionContainer>  
        <AboutTextWrapper>
          <AboutHeaderWrapper>
            <H3>{aboutTitleRow1}</H3>
            <AboutH3Underline>{aboutTitleRow2Italic}</AboutH3Underline>
            <H3>&nbsp;{aboutTitleRow2Normal}</H3>
            <H3>{aboutTitleRow3}</H3>
          </AboutHeaderWrapper>
          { yellowText && <YellowPill text={yellowText} /> }
          { aboutParagraph.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <AboutParagraphWrapper key={idx}>
                <P>{textNode.text}</P>
              </AboutParagraphWrapper>
            );
          })}
        </AboutTextWrapper>
        <HeadshotImage
          field={headshot} 
          width={400} 
          height={540} 
        />
      </AboutSectionContainer>

      <CeramicSectionContainer>
        <AboutLeftPadding> 
          <H3>{ceramicsTitle}</H3>
          <CeramicsTextWrapper>
            {ceramicsParagraph.map((node, idx) => {
              const textNode = node as RTParagraphNode;
              return (
                <AboutParagraphWrapper key={idx}>
                  <P>{textNode.text}</P>
                </AboutParagraphWrapper>
              );
            })}
          </CeramicsTextWrapper>
        </AboutLeftPadding>
        <CeramicsImagesContainer> 
          <EmptyScrollDiv></EmptyScrollDiv>
          { ceramicsImageSlices.map((slice, _) => {
            return slice.items.map((item, idx) => {
              if (!item.image.url) return null;

              const url = item.image.url;
              return (
                <CeramicsImage key={idx} $imageUrl={url} />
              )
            });
          })}
        </CeramicsImagesContainer>
        <AboutLeftPadding>
          <CtaItalic href={instagramUrl}>
            @{instagramHandle}
          </CtaItalic>
        </AboutLeftPadding>
      </CeramicSectionContainer>
    </>
  )
};