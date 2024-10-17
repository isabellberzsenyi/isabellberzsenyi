import { NavigationDocumentData } from "@/prismicio-types";
import { H3, P } from "@/style/typography";
import Link from "next/link";
import { StyledLink } from "../footer/Footer.styles";

interface NavigationProps {
  navigationData: NavigationDocumentData;
}

export default function Navigation({ navigationData }: NavigationProps) {
  const {
    work_link: workLink,
    about_link: aboutLink,
    // home_link: homeLink,
    home_link_text: homeLinkText,
  } = navigationData;

  console.log(aboutLink);
  return(
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2em 5em' }}>
      <H3 style={{ fontWeight: 'light', fontSize: '33px', width: '10px', lineHeight: '33px' }}>
        <StyledLink href={'/'}>{homeLinkText}</StyledLink>
      </H3>
      <div style={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'flex-end', width: '25%' }}>
        <P>Work</P>
        <P>
          <StyledLink href={'/about'}>About</StyledLink>
        </P>
        <P>Resume</P>
      </div>
    </div>
  );
}