import { CaseStudyDocumentData } from "@/prismicio-types";
import { H3, P } from "@/style/typography";
import { H2 } from "@/style/typography";
import { RTParagraphNode } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { 
  CaseStudyHeaderContainer, 
  CaseStudyImageWrapper, 
  CaseStudyPageContainer, 
  CaseStudyParagraphContainer, 
  CaseStudyTag, 
  CaseStudyTagDescription,
  StyledCaseStudyLink 
} from "./CaseStudyPage.styles";
import { ParagraphWrapper } from "@/style/shared.styles";

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

export default async function CaseStudyPage({ caseStudyData }: CaseStudyPageProps) {
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

  return (
    <CaseStudyPageContainer>
      <CaseStudyHeaderContainer>
        <div style={{ width: '90%'}}>
          <H2>{caseStudyTitle}</H2>
          <div style={{ width: '80%'}}>
            {caseStudyOverview.map((node, idx) => {
              const textNode = node as RTParagraphNode;
              return (
                <P key={idx}>{textNode.text}</P>
              );
            })}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {caseStudyLinks.map((link, idx) => {
              const linkType = link as CaseStudyLink;
              return (
                <StyledCaseStudyLink key={idx} href={linkType.link_url}>
                  {linkType.link_title}
                </StyledCaseStudyLink>
              );
            })}
          </div>
        </div>
        <div style={{ marginLeft: '5em'}}>
          {caseStudyTags.map((tag, idx) => {
            const tagType = tag as CaseStudyTag;
            return (
              <div key={idx} style={{ marginBottom: '2em'}}>
                <CaseStudyTag>{tagType.tag_title.toUpperCase()}</CaseStudyTag>
                <CaseStudyTagDescription>{tagType.tag_description}</CaseStudyTagDescription>
              </div>
            )
          })}
        </div>
      </CaseStudyHeaderContainer>

      <CaseStudyImageWrapper>
        <PrismicNextImage 
          field={caseStudyImage} 
          width={850} 
          height={500} 
          style={{ borderRadius: '5px' }}
        />
      </CaseStudyImageWrapper>
      
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

        <H3 style={{ marginTop: '1.5em'}}>{technicalLearningsSubheader}</H3>
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
