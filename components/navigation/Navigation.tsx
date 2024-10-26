'use client';

import { NavigationDocumentData } from "@/prismicio-types";
import { StyledLink } from "@/style/shared.styles";
import { P } from "@/style/typography";
import { 
  NavigationContainer, 
  NavigationH3, 
  NavigationLinkWrapper 
} from "./Navigation.styles";

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
        {
          navigationLinks.map((link) => (
            <P key={link.link_label}>
              <StyledLink href={`/${link.link_url}`}>{link.link_label}</StyledLink>
            </P>
          ))
        }
      </NavigationLinkWrapper>
    </NavigationContainer>
  );
};