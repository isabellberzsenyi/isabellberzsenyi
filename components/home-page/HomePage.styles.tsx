"use client";
import styled from "styled-components";
import { colors } from "../../style/colors";
import { CtaItalic, fonts, fontWeights } from "../../style/typography";
import { jump } from "@/style/animation";

const PinkSubheader = styled.h2`
  color: ${colors.BLACK};
  font-family: ${fonts.neueMontreal};
  font-weight: ${fontWeights.bold};
  font-size: 1.5em;
  line-height: 1.4em;
`;

const WorkLink = styled(CtaItalic)`
  padding-top: 1em;
  font-size: 1.75em;
`;

const HomeTitleWrapper = styled.div`
  margin: auto;
  width: 70%;
`;

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
  padding-bottom: 10em;
`;

const AboutTextWrapper = styled.div`
  width: 30em;
  text-align: left;
  margin-left: 30%;
  margin-top: 2em;
`;

const WorkLinkWrapper = styled.div`
  margin-top: 3em;
`;

const WorkSectionContainer = styled.div`
  height: 100vh;
`;

const WorkPreviewContainer = styled.div`
  max-width: 100vw;
  display: flex;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const WorkPreviewItem = styled.div`
  border: 1px solid ${colors.BLACK};
  margin: 1em;
  padding: 1em;
  min-width: 50em;
`;

const CtaArrow = styled.span`
  display: inline-block;
  transform: rotate(90deg);
  font-size: 24px; // Adjust size as needed
  margin-top: 10px;
  animation: ${jump} 1s ease-in-out infinite;
`;
export { 
  PinkSubheader, 
  WorkLink, 
  WorkPreviewContainer, 
  HomeTitleWrapper,
  PinkArchContainer,
  PinkArch,
  AboutSectionContainer,
  AboutTextWrapper,
  WorkLinkWrapper,
  WorkSectionContainer,
  WorkPreviewItem,
  CtaArrow
};
