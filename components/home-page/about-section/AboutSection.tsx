import { 
  AboutSectionContainer, 
  AboutSectionH2, 
  AboutSectionSubheader, 
  AboutTextImageWrapper, 
  AboutTextWrapper, 
  PinkArch, 
  PinkArchContainer, 
  WorkLink, 
  WorkLinkWrapper 
} from "./AboutSection.styles";
import { RTParagraphNode } from "@prismicio/client";
import { HeadshotImage } from "@/style/shared.styles";
import { KeyTextField, RichTextField, ImageField } from "@prismicio/client";
import { P } from "@/style/typography";

interface AboutSectionProps {
  aboutHeader: KeyTextField;
  aboutSubheader: KeyTextField;
  aboutParagraph: RichTextField;
  headshot: ImageField;
  workCtaText: KeyTextField;
}

export default function AboutSection({ aboutHeader, aboutSubheader, aboutParagraph, headshot, workCtaText }: AboutSectionProps) {
  return (
    <>
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
    </>
  )
}