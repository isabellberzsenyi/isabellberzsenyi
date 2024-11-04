import { StyledLink } from "@/style/shared.styles";
import { P } from "@/style/typography";

interface NavigationLinkProps {
  linkUrl: string;
  linkText: string;
  target?: boolean;
}

export default function NavigationLink({ linkUrl, linkText, target }: NavigationLinkProps) {
  return (
    <P>
      <StyledLink href={linkUrl} target={target ? "_blank" : undefined}>
        {linkText}
      </StyledLink>
    </P>
  );
}