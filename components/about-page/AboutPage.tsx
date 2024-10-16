import { AboutPageDocumentData } from "@/prismicio-types"
import { H3, H3Italic, P } from "@/style/typography";
import { RTParagraphNode } from "@prismicio/client";

interface AboutPageProps {
  aboutPageData: AboutPageDocumentData;
}

export default function AboutPage({ aboutPageData }: AboutPageProps) {
  const {
    about_title_1: aboutTitle1,
    about_title_italic_2: aboutTitleItalic2,
    about_title_3: aboutTitle3,
    about_paragraph: aboutParagraph,
    ceramics_title: ceramicsTitle,
    ceramics_paragraph: ceramicsParagraph,
    instagram_handle: instagramHandle,
  } = aboutPageData;

  return (
    <div>
      <H3>{aboutTitle1}</H3>
      <H3Italic>{aboutTitleItalic2}</H3Italic>
      <H3>{aboutTitle3}</H3>
      {aboutParagraph.map((node, idx) => {
        const textNode = node as RTParagraphNode;
        return (
          <P key={idx}>{textNode.text}</P>
        );
      })}
      <H3>{ceramicsTitle}</H3>
      {ceramicsParagraph.map((node, idx) => {
        const textNode = node as RTParagraphNode;
        return (
          <div key={idx}>{textNode.text}</div>
        )
      })}
      <div>{instagramHandle}</div>
    </div>
  )
};