import { FooterDocumentData, NavigationDocumentData } from "@/prismicio-types";
import { colors } from "@/style/colors";
import { CtaItalic, fontWeights, P } from "@/style/typography";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { StyledLink } from "./Footer.styles";
import { LinkField } from "@prismicio/client";
import { FilledLinkToWebField } from "@prismicio/client";

interface FooterProps {
  footerData: FooterDocumentData;
  navigationData: NavigationDocumentData;
}

export default function Footer({ footerData, navigationData }: FooterProps) {
  const {
    linkedin_link: linkedinLink,
    github_link: githubLink,
    email_cta_text: emailCtaText,
    email_text: emailText,
  } = footerData;

  const getUrl = (link: LinkField) => {
    if (link.link_type === 'Web') {
      return (link as FilledLinkToWebField).url;
    }
    return '#';
  }

  console.log(linkedinLink);

  const {
    home_link: homeLink,
    work_link: workLink,
    about_link: aboutLink,
    resume_link: resumeLink,
  } = navigationData;

  return (
    <div style={{ backgroundColor: colors.LIGHT_GREEN, paddingTop: '2em', paddingBottom: '2em', paddingLeft: '5em', paddingRight: '3.5em', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
        <div>
          <P >
            <StyledLink href={'/'}>Home</StyledLink>
          </P>
          <P>Work</P>
          <P >
            <StyledLink href={'/about'}>About</StyledLink>
          </P>
        </div>
        <div>
          <P>
            <StyledLink href={getUrl(linkedinLink)} target="_blank">
              LinkedIn
            </StyledLink>
          </P>
          <P>
            <StyledLink href={getUrl(githubLink)} target="_blank">
              GitHub
            </StyledLink>
          </P>
          <P>Resume</P>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
        <CtaItalic style={{ fontSize: '20px', fontWeight: 200 }}>
          {emailCtaText}
        </CtaItalic>
        <CtaItalic style={{ fontSize: '40px' }} href={`mailto:${emailText}`} target="_blank">
          {emailText}
        </CtaItalic>
      </div>
    </div>
  )
};