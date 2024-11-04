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
import { useMatchMedia } from "@/lib/hooks";
import { breakpointsObj } from "@/lib/responsive";

interface AboutSectionProps {
  aboutHeader: KeyTextField;
  aboutSubheader: KeyTextField;
  aboutParagraph: RichTextField;
  headshot: ImageField;
  workCtaText: KeyTextField;
}

export default function AboutSection({ 
  aboutHeader, 
  aboutSubheader, 
  aboutParagraph, 
  headshot, 
  workCtaText
}: AboutSectionProps) {

  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.mobileLg}px)`);

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
            width={isMobile ? 300 : 400} 
            height={isMobile ? 450 : 540} 
            alt=""
          />
        </AboutTextImageWrapper>
      </AboutSectionContainer>
    </>
  )
};