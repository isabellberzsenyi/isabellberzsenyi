'use client';

import { NavigationDocumentData } from "@/prismicio-types";
import { StyledLink } from "@/style/shared.styles";
import { 
  NavigationContainer, 
  NavigationH3, 
  NavigationLinkWrapper 
} from "./Navigation.styles";
import NavigationLink from "../navigation-link/NavigationLink";

interface NavigationProps {
  navigationData: NavigationDocumentData;
  backgroundColor?: string;
}

export default function Navigation({ navigationData, backgroundColor }: NavigationProps) {
  const {
    home_link_text: homeLinkText,
    navigation_link: navigationLinks
  } = navigationData;

  return(
    <NavigationContainer backgroundColor={backgroundColor}>
      <NavigationH3>
        <StyledLink href={'/'}>{homeLinkText}</StyledLink>
      </NavigationH3>
      <NavigationLinkWrapper>
        { navigationLinks.map((link, idx) => (
          <NavigationLink 
            key={idx.toString()}
            linkUrl={`/${link.link_url}`}
            linkText={link.link_label || ''}
          />
        ))}
      </NavigationLinkWrapper>
    </NavigationContainer>
  );
};