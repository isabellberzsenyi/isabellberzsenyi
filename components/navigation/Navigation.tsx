'use client';

import { NavigationDocumentData } from "@/prismicio-types";
import { StyledLink } from "@/style/shared.styles";
import { 
  NavigationContainer, 
  NavigationH3, 
  NavigationLinksContainer 
} from "./Navigation.styles";
import NavigationLink from "../navigation-link/NavigationLink";
import { FilledLinkToMediaField } from "@prismicio/client";

interface NavigationProps {
  navigationData: NavigationDocumentData;
  backgroundColor?: string;
}

export default function Navigation({ navigationData, backgroundColor }: NavigationProps) {
  const {
    home_link_text: homeLinkText,
    navigation_link: navigationLinks,
    resume_pdf: resumePdf
  } = navigationData;

  const resumePdfUrl = resumePdf ? (resumePdf as FilledLinkToMediaField).url : undefined; 

  return(
    <NavigationContainer backgroundColor={backgroundColor}>
      <NavigationH3>
        <StyledLink href={'/'}>{homeLinkText}</StyledLink>
      </NavigationH3>
      <NavigationLinksContainer>
        { navigationLinks.map((link, idx) => (
          <div key={idx.toString()} style={{ paddingLeft: '2em' }}>
            {(link.link_label === 'Resume' && resumePdfUrl) ? (
              <NavigationLink 
                  linkUrl={resumePdfUrl}
                  linkText={link.link_label || ''}
                  target={true}
                />
              ) : (
                <NavigationLink 
                linkUrl={`/${link.link_url}`}
                linkText={link.link_label || ''}
              />
            )}
          </div>
        ))}
      </NavigationLinksContainer>
    </NavigationContainer>
  );
};