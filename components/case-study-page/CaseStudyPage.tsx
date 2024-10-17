import { CaseStudyDocumentData } from "@/prismicio-types";
import { colors } from "@/style/colors";
import { CtaItalic, H3, P } from "@/style/typography";
import { H2 } from "@/style/typography";
import { RichTextField, RTParagraphNode } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { CaseStudyTag, CaseStudyTagDescription, StyledCaseStudyLink } from "./CaseStudyPage.styles";

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
    <div style={{ textAlign: 'center', borderTopLeftRadius: '80px', borderTopRightRadius: '80px', backgroundColor: colors.CANVAS, paddingTop: '5em' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%', margin: 'auto', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'left', width: '75%'}}>
          <H2>{caseStudyTitle}</H2>
          {caseStudyOverview.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <P key={idx}>{textNode.text}</P>
            )
          })}

          <div style={{ display: 'flex', flexDirection: 'row'}}>
            {caseStudyLinks.map((link, idx) => {
              const linkType = link as CaseStudyLink;
              return (
                <div key={idx} style={{ marginTop: '1em', marginBottom: '1em', marginRight: '2em' }}>
                  <StyledCaseStudyLink href={linkType.link_url}>{linkType.link_title}</StyledCaseStudyLink>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
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
      </div>
      <div style={{ width: '75%', margin: 'auto', marginTop: '5em' }}>
        <PrismicNextImage 
          field={caseStudyImage} 
          width={820} 
          height={500} 
          style={{ borderRadius: '5px' }}
        />
      </div>
      
      <div style={{ width: '35%', margin: '0 auto', marginTop: '5em', textAlign: 'left', paddingBottom: '8em' }}>
        <H3>{projectMotivationSubheader}</H3>
        {projectMotivationText.map((node, idx) => {
          const textNode = node as RTParagraphNode;
          return (
            <div key={idx} style={{ marginBottom: '1em' }}>
              <P>{textNode.text}</P>
            </div>
          );          
        })}
        <H3 style={{ marginTop: '1.5em'}}>{technicalLearningsSubheader}</H3>
        <ul style={{ paddingLeft: '1em'}}>
          {technicalLearningsText.map((node, idx) => {
            const textNode = node as RTParagraphNode;
            return (
              <div key={idx} style={{ marginBottom: '1em' }}>
                <li>
                  <P>{textNode.text}</P>
                </li>
              </div>
            );          
          })}
        </ul>
      </div>
    </div>
  );
}
