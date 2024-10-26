import styled from "styled-components";
import { colors } from "@/style/colors";
import { fonts, fontWeights, H2Italic } from "@/style/typography";
import { CtaItalic } from "@/style/typography";
import { min } from "@/lib/responsive";

const PinkArchContainer = styled.div`
  height: 10em;
  overflow: hidden;

  @media ${min.tabletSm} {
    height: 20em;
  }
`;

const PinkArch = styled.div`
  width: 110vw;
  background: ${colors.BABY_PINK};
  margin: 5vw 0 0 -5vw;
  height: 20em;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 50%;

  @media ${min.tabletSm} {
    margin: 5vw 0 0 -5vw;
    height: 40em;
  }
`;

const AboutSectionContainer = styled.div`
  background: ${colors.BABY_PINK};
  padding-bottom: 8em;
`;

const AboutSectionH2 = styled(H2Italic)`
  position: relative;
  z-index: 3;
`;

const AboutSectionSubheader = styled.h5`
  color: ${colors.BLACK};
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1.3em;

  @media ${min.tablet} {
    font-size: 1.5em;
    line-height: 1.4em;
  }
`;

const AboutTextImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  margin-top: -3em;
  position: relative;

  @media ${min.tabletLg} {
    margin-left: 15%;
  }

  @media ${min.desktop} {
    flex-direction: row;
    margin-left: 25%;
  }

  @media ${min.desktopLg} {
    margin-left: 35%;
  }
`;

const AboutTextWrapper = styled.div`
  text-align: justify;
  margin-top: 2em;
  z-index: 2;
  width: 80%;

  @media ${min.tablet} {
    width: 30em;
  }

  @media ${min.tabletLg} {
    text-align: left;
  }
`;


const WorkLinkWrapper = styled.div`
  margin-top: 3em;
  text-align: center;
  margin-bottom: 2em;

  @media ${min.tabletLg} {
    text-align: left;
  }
`;

const WorkLink = styled(CtaItalic)`
  padding-top: 1em;
  font-size: 1.75em;
`;

export {
  AboutSectionSubheader, 
  WorkLink, 
  PinkArchContainer,
  PinkArch,
  AboutSectionContainer,
  AboutSectionH2,
  AboutTextImageWrapper,
  AboutTextWrapper,
  WorkLinkWrapper,
};