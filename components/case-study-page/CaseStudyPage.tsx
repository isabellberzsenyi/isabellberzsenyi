'use client';

import { CaseStudyDocumentData } from "@/prismicio-types";
import { H3, P } from "@/style/typography";
import { H2 } from "@/style/typography";
import { RTParagraphNode } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { 
  CaseStudyTextContainer, 
  CaseStudyTitleWrapper,
  CaseStudyImageWrapper, 
  CaseStudyPageContainer, 
  CaseStudyParagraphContainer, 
  CaseStudyTag, 
  CaseStudyTagDescription,
  StyledCaseStudyLink,
  CaseStudyOverviewWrapper,
  CaseStudyLinksWrapper,
  CaseStudyOverviewLinksWrapper,
  CaseStudyTagsWrapper,
  CaseStudyHeaderWrapper, 
} from "./CaseStudyPage.styles";
import { ParagraphWrapper } from "@/style/shared.styles";
import { breakpointsObj } from "@/lib/responsive";
import { useMatchMedia } from "@/lib/hooks";

interface CaseStudyPageProps {
  caseStudyData: CaseStudyDocumentData
}

interface CaseStudyLink {
  link_title: string;
  link_url: string;
}

interface CaseStudyTag {
  tag_title: string;
  tag_description: string;
}

export default function CaseStudyPage({ caseStudyData }: CaseStudyPageProps) {
  const { 
    case_study_title: caseStudyTitle,
    case_study_overview: caseStudyOverview,
    case_study_links: caseStudyLinks,
    case_study_image: caseStudyImage,
    case_study_tags: caseStudyTags,
    project_motivation_subheader: projectMotivationSubheader,
    project_motivation_text: projectMotivationText,
    technical_learnings_subheader: technicalLearningsSubheader,
    technical_learnings_text: technicalLearningsText,
   } = caseStudyData;

  const isTabletSm = useMatchMedia(`(max-width: ${breakpointsObj.tablet}px)`);
  const isTablet = useMatchMedia(`(max-width: ${breakpointsObj.desktop}px)`);
  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  const imageWidth = () => {
    if (isMobile) return 290;
    if (isTabletSm) return 450;
    if (isTablet) return 550;
    
    return 800;
  }

  const imageHeight = () => {
    if (isMobile) return 160;
    if (isTabletSm) return 250;
    if (isTablet) return 320;
    
    return 450;
  }

  return (
    <CaseStudyPageContainer>
      <CaseStudyHeaderWrapper>
        <CaseStudyTitleWrapper>
          <H2>{caseStudyTitle}</H2>
        </CaseStudyTitleWrapper>
        <CaseStudyTextContainer>
          <CaseStudyOverviewLinksWrapper>
            <CaseStudyOverviewWrapper>
              {caseStudyOverview.map((node, idx) => {
                const textNode = node as RTParagraphNode;
                return (
                  <P key={idx}>{textNode.text}</P>
                );
              })}
            </CaseStudyOverviewWrapper>
            <CaseStudyLinksWrapper>
              {caseStudyLinks.map((link, idx) => {
                const linkType = link as CaseStudyLink;
                return (
                  <StyledCaseStudyLink key={idx} href={linkType.link_url}>
                    {linkType.link_title}
                  </StyledCaseStudyLink>
                );
              })}
            </CaseStudyLinksWrapper>
          </CaseStudyOverviewLinksWrapper>

          <CaseStudyTagsWrapper>
            {caseStudyTags.map((tag, idx) => {
              const tagType = tag as CaseStudyTag;
              return (
                <div key={idx} style={{ marginBottom: '2em'}}>
                  <CaseStudyTag>{tagType.tag_title.toUpperCase()}</CaseStudyTag>
                  <CaseStudyTagDescription>
                    {tagType.tag_description}
                  </CaseStudyTagDescription>
                </div>
              )
            })}
          </CaseStudyTagsWrapper>
        </CaseStudyTextContainer>

        <CaseStudyImageWrapper>
          <PrismicNextImage 
            field={caseStudyImage} 
            width={imageWidth()}
            height={imageHeight()}
            style={{ borderRadius: '5px' }}
          />
        </CaseStudyImageWrapper>
      </CaseStudyHeaderWrapper>

      <CaseStudyParagraphContainer>
        <H3>{projectMotivationSubheader}</H3>
        {projectMotivationText.map((node, idx) => {
          const textNode = node as RTParagraphNode;
          return (
            <ParagraphWrapper key={idx}>
              <P>{textNode.text}</P>
            </ParagraphWrapper>
          );          
        })}

        <H3 style={{ marginTop: '1.5em'}}>
          {technicalLearningsSubheader}
        </H3>
        <ul style={{ paddingLeft: '1em'}}>
          {technicalLearningsText.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <ParagraphWrapper key={idx}>
                <li>
                  <P>{textNode.text}</P>
                </li>
              </ParagraphWrapper>
            );          
          })}
        </ul>
      </CaseStudyParagraphContainer>
    </CaseStudyPageContainer>
  );
}
