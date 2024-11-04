import { 
  FooterDocumentData, 
  NavigationDocumentData, 
  NavigationDocumentDataNavigationLinkItem, 
  Simplify 
} from "@/prismicio-types";
import { StyledLink } from "@/style/shared.styles";
import { FilledLinkToMediaField, LinkField } from "@prismicio/client";
import { FilledLinkToWebField } from "@prismicio/client";
import { 
  EmailCtaWrapper, 
  EmailLinkWrapper, 
  FooterContainer, 
  FooterCtaWrapper, 
  FooterLinksWrapper 
} from "./Footer.styles";
import { P } from "@/style/typography";
import NavigationLink from "../navigation-link/NavigationLink";

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
  };

  const {
    navigation_link: navigationLinks,
    resume_pdf: resumePdf,
  } = navigationData;

  const resumeLink: Simplify<NavigationDocumentDataNavigationLinkItem> | undefined = 
    navigationLinks.find((link) => link.link_label === 'Resume');

  const footerNavLinks = navigationLinks.filter((link) => link.link_label !== 'Resume');
  const resumePdfUrl = resumePdf ? (resumePdf as FilledLinkToMediaField).url : undefined; 

  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <div>
          <P>
            <StyledLink href={'/'}>Home</StyledLink>
          </P>
          { footerNavLinks.map((link, idx) => (
            <NavigationLink
              key={idx.toString()}
              linkUrl={`/${link.link_url}`}
              linkText={link.link_label || ''}
            />
          ))}
          
        </div>
        <div>
          <NavigationLink
            key="linkedin"
            linkUrl={getUrl(linkedinLink)}
            linkText="LinkedIn"
            target={true}
          />
          <NavigationLink
            key="github"
            linkUrl={getUrl(githubLink)}
            linkText="GitHub"
            target={true}
          />
          {resumePdfUrl && resumeLink && (
            <NavigationLink 
              key="resume"
              linkUrl={resumePdfUrl}
              linkText={resumeLink.link_label || ''}
              target={true}
            />
          )}
        </div>
      </FooterLinksWrapper>
      <FooterCtaWrapper>
        <EmailCtaWrapper>
          {emailCtaText}
        </EmailCtaWrapper>
        <EmailLinkWrapper href={`mailto:${emailText}`} target="_blank">
          {emailText}
        </EmailLinkWrapper>
      </FooterCtaWrapper>
    </FooterContainer>
  )
};