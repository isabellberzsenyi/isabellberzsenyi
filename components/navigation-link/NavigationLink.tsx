import { StyledLink } from "@/style/shared.styles";
import { P } from "@/style/typography";

interface NavigationLinkProps {
  key?: string;
  linkUrl: string;
  linkText: string;
  target?: boolean;
}

export default function NavigationLink({ key, linkUrl, linkText, target }: NavigationLinkProps) {
  return (
    <P key={key}>
      <StyledLink href={linkUrl} target={target ? "_blank" : undefined}>
        {linkText}
      </StyledLink>
    </P>
  );
}