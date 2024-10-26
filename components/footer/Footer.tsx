import { 
  FooterDocumentData, 
  NavigationDocumentData, 
  NavigationDocumentDataNavigationLinkItem, 
  Simplify 
} from "@/prismicio-types";
import { StyledLink } from "@/style/shared.styles";
import { LinkField } from "@prismicio/client";
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
  }

  const {
    home_link_text: homeLinkText,
    navigation_link: navigationLinks
  } = navigationData;

  const resumeLink: Simplify<NavigationDocumentDataNavigationLinkItem> | undefined = 
    navigationLinks.find((link) => link.link_label === 'Resume');

  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <div>
          <P>
            <StyledLink href={'/'}>Home</StyledLink>
          </P>
          { navigationLinks.map((link) => (
            <NavigationLink
              key={link.link_label || ''}
              linkUrl={`/${link.link_url}`}
              linkText={link.link_label || ''}
            />
          ))}
          { resumeLink && (
            <NavigationLink
              linkUrl={`/${resumeLink.link_url}`}
              linkText={resumeLink.link_label || ''}
            />
          )}
        </div>
        <div>
          <NavigationLink
            linkUrl={getUrl(linkedinLink)}
            linkText="LinkedIn"
            target={true}
          />
          <NavigationLink
            linkUrl={getUrl(githubLink)}
            linkText="GitHub"
            target={true}
          />
          { resumeLink && (
            <NavigationLink
              linkUrl={`/${resumeLink.link_url}`}
              linkText={resumeLink.link_label || ''}
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