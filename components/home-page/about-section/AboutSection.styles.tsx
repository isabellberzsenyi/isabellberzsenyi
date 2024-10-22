import styled from "styled-components";
import { colors } from "@/style/colors";
import { fonts, fontWeights, H2Italic } from "@/style/typography";
import { CtaItalic } from "@/style/typography";

const PinkArchContainer = styled.div`
  height: 20em;
  overflow: hidden;
`;

const PinkArch = styled.div`
  width: 110vw;
  background: ${colors.BABY_PINK};
  margin: 5vw 0 0 -5vw;
  height: 40em;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 50px;
  border-radius: 50%;
`;

const AboutSectionContainer = styled.div`
  background: ${colors.BABY_PINK};
  padding-bottom: 8em;
`;

const AboutSectionH2 = styled(H2Italic)`
  position: relative;
  z-index: 3;
`;

const AboutTextImageWrapper = styled.div`
  display: flex;
  margin-left: 25%;
  align-items: center;
  margin-top: -3em;
  position: relative;
`;

const AboutTextWrapper = styled.div`
  width: 30em;
  text-align: left;
  margin-top: 2em;
  z-index: 2;
`;

const AboutSectionSubheader = styled.h3`
  color: ${colors.BLACK};
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1.5em;
  line-height: 1.4em;
`;

const WorkLinkWrapper = styled.div`
  margin-top: 3em;
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