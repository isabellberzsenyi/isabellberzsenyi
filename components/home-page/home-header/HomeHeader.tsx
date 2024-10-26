import { H1 } from "@/style/typography";
import { CtaArrow, CtaArrowWrapper, HomeTitleWrapper } from "./HomeHeader.styles";
import YellowPill from "@/components/yellow-pill/YellowPill";
import { KeyTextField } from "@prismicio/client";

interface HomeHeaderProps {
  homeTitle: KeyTextField;
  yellowText: KeyTextField;
  scrollCtaText: KeyTextField;
}

export default function HomeHeader({ homeTitle, yellowText, scrollCtaText }: HomeHeaderProps) {
  return (
    <>
      <HomeTitleWrapper>
        <H1>{homeTitle}</H1>
      </HomeTitleWrapper>
      { yellowText && (
        <YellowPill text={yellowText} />
      )}
      <CtaArrowWrapper>
        {scrollCtaText}
        <CtaArrow>
          →
        </CtaArrow>
      </CtaArrowWrapper>
    </>
  );
};